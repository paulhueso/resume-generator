const User = require("../models/user");
const bcrypt = require('bcrypt');
let session = require('express-session');



module.exports = class UserService{

    static async login(req){
        try {
            let user = await User.findOne({mail: req.body.mail});
            let verified = bcrypt.compareSync(req.body.password, user.password);
            if(verified){
                session = req.session;
                session.userid = user.firstname + user.surname;
                session.user = user;
                console.log(session);
                // User.updateOne({mail: req.body.mail})
            }
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