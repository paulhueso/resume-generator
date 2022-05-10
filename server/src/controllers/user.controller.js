const UserService = require("../services/UserService");

module.exports = class User{

   static async apiLogin(req, res){
      try {
            if(req.session.isAuthentificated){
               res.status(200).json("Access granted via cookie");
            }
            else{
               //console.log(req.session)
               let verified = await UserService.login(req.body,req.session);
               if(verified){
                  res.status(200).json("Access granted via password");
               }
               else{
                  res.status(401).json("Unauthorized");
               }
            }
      } 
      catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiGetUser(req,res){
      try {
            if(req.session.isAuthentificated){
               res.status(200).json(req.session.user);
            }
            else{
                  res.status(401).json("Unauthorized");
               }
      }
      catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiLogout(req, res){
      if(req.session.isAuthentificated){
         req.session.destroy()
         res.status(200).json("Session destroyed");
      }
      else{
          res.status(401).json("User unauthenticated")
      }
   }

   static async apiGetAllUsers(req, res){
      try {
         const users = await UserService.getAllUsers();
         if(!users){
            res.status(404).json("No users")
         }
         res.json(users);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

   static async apiGetUserById(req, res){
      try {
         let id = req.params.id || {};
         const user = await UserService.getUserById(id);
         res.json(user);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiGetUserByName(req, res){
      try {
         let name = req.params.name || {};
         const user = await UserService.getUserByName(name);
         res.json(user);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCreateUser(req, res){
      try {
         let user = req.body || {};
         const createdUser = await UserService.createUser(user);
         res.json(createdUser);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }
}