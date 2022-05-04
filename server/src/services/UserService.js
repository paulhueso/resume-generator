const User = require("../models/user");

module.exports = class UserService{
    static async getAllUsers(){
        try {
            const allUsers = User.find();
            return allUsers;
        } catch (error) {
            console.log(`Could not fetch users ${error}`);
        }
    }

    static async getUserById(userId){
        try {
            const singleUser =  await User.findById({_id: userId});
            return singleUser;
        } catch (error) {
            console.log(`Article not found. ${error}`)
        }
    }

    static async getUserByName(name){
        try {
            const singleUser =  await User.findById({firstname: name});
            return singleUser;
        } catch (error) {
            console.log(`Article not found. ${error}`)
        }
    }

    static async createUser(data){
        try {
            const newUser = {
                'firstname': data.firstname,
                'surname' : data.lastname,
                'address' : data.address,
                'mail' : data.mail,
                'password' : data.password,
                'tel' : data.phone,
                'cv_list' : [
                    {
                        'experiences' : data.experiences,
                        'formations' : data.formations
                    }
                ]
            }
           const response = await new Article(newUser).save();
           return response;
        } catch (error) {
            console.log(error);
        } 
    }
}