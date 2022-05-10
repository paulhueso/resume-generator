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

    static async createCV(data){
        try {
            const newCV = {
                'titre': 'CV n°1',
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