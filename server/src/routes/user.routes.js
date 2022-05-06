const express = require('express');
const { session } = require('passport/lib');
const router = express.Router();
const UserController = require("../controllers/user.controller");

/* GET ALL USERS */
router.get('/api/users/', UserController.apiGetAllUsers);

/* CREATE A NEW USER */
router.post('/api/register/', UserController.apiCreateUser);

/* GET A USER BY ID */
router.get('/api/users/id/:id', UserController.apiGetUserById);

/* GET A USER BY NAME */
router.get('/api/users/name/:name', UserController.apiGetUserByName);

/* LOGIN */
router.post('/api/login/', UserController.apiLogin);

/* LOGOUT */
router.get('/api/logout/', UserController.apipLogout);

/* WEBPAGE ROUTE FOR TESTS */
router.get('/', (req,res) => {
    console.log(req.session);
    sess = req.session;
    if(sess.isAthentificated){
        res.send(`<h1>Hello ${sess.name} (sessions)</h1>`);
    }
    else{
        sess.isAthentificated = true;
        sess.name = "Nicolas";
        res.send(`<h1>Cookie created</h1>`);
    }
})

module.exports = router;