const User = require("../models/user.model");
const Cv = require("../models/cv.model");
const bcrypt = require('bcrypt');
const { ObjectId } = require("mongodb");


module.exports = class UserService{

    static async login(data,session){
        try {
            let user = await User.findOne({mail: data.mail});
            const verified = bcrypt.compareSync(data.password, user.password);
            if(verified){
                session.user = user;
                session.isAuthentificated = true;
                session.cv_list = []
                for(var i = 0; i < user.cv_list.length; i++){
                    let cv = await Cv.findOne({_id: user.cv_list[i]});
                    if(cv){
                        session.cv_list.push(cv)
                    }
                    else{console.log("Error finding cv by id in 'login'")}
                }
                 
                return true;
            }
            else{
                return false;
            }
        } catch (error) {
            console.log("Error login: " + error);
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

    static async updateUser(user,data,session){
        try {
            if(data.password){
                data.password = bcrypt.hashSync(data.password, 10);
            }
            const updatedUser = {
                '_id': user._id,
                'firstname': data.firstname || user.firstname,
                'surname' : data.surname || user.surname,
                'address' : data.address || user.address,
                'mail' : data.mail || user.mail,
                'password' : data.password || user.password,
                'tel' : data.phone || user.tel,
                'cv_list' : user.cv_list
            }
            const resp = await User.findOneAndReplace({_id: user._id},updatedUser);
            session.user = updatedUser;
            return resp;
        } catch (error) {
            console.log(`Error saving user in database: ${error}`);
            return undefined;
        }
    }

    static async createUser(data){
        try {
            const newUser = {
                'firstname': data.firstname,
                'surname' : data.lastname,
                'address' : data.address,
                'mail' : data.mail,
                'password' : bcrypt.hashSync(data.password, 10),
                'tel' : data.phone,
                'cv_list' : data.cv_list || []
            }
            const res = await User.findOne({mail: data.mail});
            if(!res){
                const response = await new User(newUser).save();
                return response;
            }
            else return null
        } catch (error) {
            console.log(error);
        } 
    }
}