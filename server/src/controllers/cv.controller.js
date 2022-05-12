const CvService = require("../services/CvService");
const UserService = require("../services/UserService");

module.exports = class Cv{

   static async apiGetAllCVs(req, res){
      try {
         const users = await CvService.getAllCVs();
         if(!users){
            res.status(404).json("No CVs")
         }
         res.json(users);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

   static async apiGetCVs(req,res){
      try {
         if(req.session.isAuthentificated){
            res.status(200).json(req.session.cv_list);
         }
         else{
            res.status(401).json("Unauthorized");
         }
      }
      catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiGetCVById(req,res){
      if(req.session.isAuthentificated){
         const id = req.params.id;
         const user = req.session.user;
         const found = user.cv_list.find(element => element == id);
         if (found){
            const list = req.session.cv_list;
            for(var i = 0; i < list.length; i++){
               if(list[i]._id == id)
                  res.status(200).json(list[i]);
            }
         }
         else{
            res.status(401).json("Unauthorized: Not a cv of the current user");
         }
      }
      else{
         res.status(401).json("Unauthorized: Please log in");
      }
   }

   static async apiSaveCVs(req,res){
      const session = req.session;
      if(session.isAuthentificated){
         const cv_list = session.cv_list;
         cv_list.forEach(function(cv){
            const res = CvService.saveCVsInBDD(cv);
            if(!res){
               res.status(500).json("Error while updating");
               return;
            }
         });
         req.session.modified_cvs = [];
         res.status(200).json("Save done");
      }
      else{
         res.status(401).json("Unauthorized: please log in");
      }
   }

   static async apiPatchCVById(req,res){
      if(req.session.isAuthentificated){
         const data = req.body
         const id = req.params.id;
         let index = req.session.user.cv_list.indexOf(id);
         if (index != -1){
            index = -1;
            for(var i = 0; i < req.session.cv_list.length; i++){
               if(req.session.cv_list[i]._id == id) index = i;
            }
            if(index != -1){
               const cv = req.session.cv_list[index];
               const updatedCV = {
                  '_id': id,
                  'title':data.title || cv.title,
                  'type': data.type || cv.type,
                  'experiences': data.experiences || cv.experiences,
                  'formations': data.formations || cv.formations
               };
               req.session.cv_list.splice(index,1);
               req.session.cv_list.push(updatedCV);
               req.session.modified_cvs.push(id);
               res.status(200).json(updatedCV);
            }
            else res.status(500).json("Internal Server Error: index in session CV list not found");
         }
         else res.status(403).json("Forbidden: Not a CV of User");
      }
      else{
         res.status(401).json("Unauthorized: Please log in");
      }
   }

   static async apiCreateCV(req, res){
      try {
         if(req.session.isAuthentificated){
            let user = req.session.user;
            const createdCV = await CvService.createCV(req.body,user,res,req.session);
         }
         else res.status(401).json("Unauthorized: please log in");
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiDeleteCV(req, res){
      try {
         if(req.session.isAuthentificated){
            const id = req.params.id;
            let user = req.session.user;
            let cv_list = req.session.cv_list;
            await CvService.deleteCV(id,res,req.session);
         }
         else res.status(401).json("Unauthorized: please log in");
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCVStatus(req,res){
      try {
         if(req.session.isAuthentificated){
            const index = req.session.modified_cvs.indexOf(req.params.id);
            console.log(index,req.session)
            if(index != -1) {res.status(200).json("CV has been modified");}
            else res.status(207).json("Not modification found");
         }
         else res.status(401).json("Unauthorized: please log in");
      } 
      catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiRestoreCv(req, res){
      try {
         if(req.session.isAuthentificated){
            const id = req.params.id;
            await CvService.RestoreCV(id,req,res);
         }
         else res.status(401).json("Unauthorized: please log in");
      } catch (error) {
         res.status(500).json({error: error})
      }
   }
   
}