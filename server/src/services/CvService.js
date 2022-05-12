const Cv = require("../models/cv.model");
const User = require("../models/user.model");
const UserService = require("./UserService");

module.exports = class CvService{

    static async getAllCVs(){
        try {
            const allCVs = Cv.find();
            return allCVs;
        } catch (error) {
            console.log(`Could not fetch cvs ${error}`);
        }
    }

    static async saveCVsInBDD(cv){
        try {
            const response = await Cv.findOneAndReplace(
                {
                    "_id":cv._id
                }
                ,
                {
                    "_id":cv.id,
                    "title": cv.title,
                    "type": cv.type,
                    "experiences": cv.experiences,
                    "formations": cv.formations
            });
            return response;
        } catch (error) {
            console.log(`Error saving in database: ${error}`);
        }
    }

    static async createCV(data,user,res,session){
        try {
            const newCV = {
                'title':data.title || "Default",
                'type': data.type || true,
                'experiences': data.experiences || [],
                'formations': data.formations || []
                }
            const response = await new Cv(newCV).save();
            if(response){
                //succes de la requête
                user.cv_list.push(response._id);
                session.cv_list.push(response);
                const response2 = await User.findOneAndReplace({_id:user._id}, user);
                if(response2){
                    res.status(201).json(response);
                }
                else res.status(500).json("Internal Server error: erreur adding new CV to user");
            }
            else res.status(500).json("Internal Server error: erreur creation CV");
        } 
        catch (error) {
            console.log(error);
        } 
    }

    static async deleteCV(id,res,session){
        try {
            let index = session.user.cv_list.indexOf(id);
            if(index != -1){
                //Remove the cv id from User (session)
                session.user.cv_list.splice(index,1);
                index = -1;
                for(var i = 0; i < session.cv_list.length; i++){
                    if(session.cv_list[i]._id == id) index = i;
                }
                if(index != -1){
                    //Remove the cv (session)
                    session.cv_list.splice(index,1);
                    //Remove the cv id from user (database)
                    let response = await User.findOneAndUpdate({_id:session.user._id},{cv_list:session.user.cv_list});
                    if(response){
                        //Remove the cv (database)
                        response = undefined;
                        response = await Cv.findOneAndDelete({_id:id});
                        index = session.modified_cvs.indexOf(id);
                        if(index != -1) session.modified_cvs.splice(index,1);
                        if(response) res.status(200).json("CV deleted");
                        else res.status(500).json("Internal Server Error: Couldn't delete CV");
                    }
                    else res.status(500).json("Internal Server Error: Couldn't update User");
                }
                else res.status(500).json("Internal Server Error: index = -1");
            }
            else res.status(403).json("Forbidden: CV doesn't belong to User");
        } 
        catch (error) {
            console.log(error);
        } 
    }

    static async RestoreCV(id,req,res){
        try {
            const index = req.session.modified_cvs.indexOf(id);
            if(index != -1){
               const cv = await Cv.findOne({_id:id});
               if(cv){
                    const index2 = -1;
                    for(var i = 0; i < req.session.cv_list.length;i++){
                        if(req.session.cv_list[i]._id == id) index2 = i;
                    }
                    if(index != -1){
                        req.session.cv_list.splice(index2,1);
                        req.session.cv_list.push(cv);
                        req.session.modified_cvs.splice(index,1);
                        res.status(200).json(cv);
                    }
                    else res.status(500).json("Internal Server Error: CV not in session list");
               }
               else res.status(500).json("Internal Server Error: CV not found in database");
            }
            else res.status(404).json("Not Found: CV not modified");
        } 
        catch (error) {
            console.log(error);
        } 
    }
}