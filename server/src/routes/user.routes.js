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
router.get('/api/logout/', UserController.apiLogout);

module.exports = router;