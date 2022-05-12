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
         res.status(200).json("Save done");
      }
      else{
         res.status(401).json("Unauthorized: please log in");
      }
   }

   static async apiPatchCVById(req,res){
      if(req.session.isAuthentificated){
         const data = req.body
         const updatedCV = {
            '_id': data._id,
            'title':data.title,
            'type': data.type,
            'experiences': data.experiences,
            'formations': data.formations
         }
         const id = req.params.id;
         const user = req.session.user;
         const found = user.cv_list.find(element => element == id);
         let list= []
         if (found){
            for(var i = 0; i < req.session.cv_list.length; i++){
               if(req.session.cv_list[i]._id != id)list.push(req.session.cv_list[i]);
            }
            list.push(updatedCV);
            req.session.cv_list = list;
            res.status(200).json(updatedCV);
            
         }
         else{
            res.status(401).json("Unauthorized: Not a cv of the current user");
         }
      }
      else{
         res.status(401).json("Unauthorized: Please log in");
      }
   }

   static async apiCreateCV(req, res){
      try {
         if(req.session.isAuthentificated){
            let user = req.session.user;
            let cv_list = req.session.cv_list;
            const createdCV = await CvService.createCV(req.body,user,res,cv_list);
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
   
}