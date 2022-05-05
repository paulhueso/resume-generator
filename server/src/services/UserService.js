const User = require("../models/user");
const bcrypt = require('bcrypt');


module.exports = class UserService{

    static async login(data){
        try {
            let user = await User.findOne({mail: data.mail});
            const verified = bcrypt.compareSync(data.password, user.password);
            return verified;
        } catch (error) {
            console.log(error);
        } 
    }

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
                'mail' : data.mail.toLowerCase(),
                'password' : bcrypt.hashSync(data.password, 10),
                'tel' : data.phone,
                'cv_list' : data.cv_list || []
            }
           const response = await new User(newUser).save();
           return response;
        } catch (error) {
            console.log(error);
        } 
    }
}