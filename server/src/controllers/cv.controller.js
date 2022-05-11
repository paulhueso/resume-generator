const CvService = require("../services/CvService");

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

   static async apiCreateCV(req, res){
      try {
         let cv = {};
         const createdCV = await CvService.createCV(cv);
         res.json(createdCV);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }
}