const express = require('express');
const { session } = require('passport/lib');
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.get('/api/users/', UserController.apiGetAllUsers);
router.post('/api/register/', UserController.apiCreateUser);
router.get('/api/users/id/:id', UserController.apiGetUserById);
router.get('/api/users/name/:name', UserController.apiGetUserByName);
router.post('/api/login/', UserController.apiLogin);

router.get('/', (req,res,next) => {
    
    console.log(req.session);
    sess = req.session;
    if(sess.isAthentificated){
        res.send(`<h1>Hello ${sess.name} (sessions)</h1>`);
    }
    else{
        sess.isAthentificated = true
        sess.name = "Nicolas"
        res.send(`<h1>Cookie created</h1>`);
    }
  })

module.exports = router;