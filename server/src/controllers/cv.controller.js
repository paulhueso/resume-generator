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