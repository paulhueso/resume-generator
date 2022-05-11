const Cv = require("../models/cv.model");

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

    static async createCV(data){
        try {
            const newCV = {
                'title': 'CV n°1',
                'type' : 1,
                'experiences' : [{}],
                'formations' : [{}]
            }
           const response = await new Cv(newCV).save();
           return response;
        } catch (error) {
            console.log(error);
        } 
    }
}