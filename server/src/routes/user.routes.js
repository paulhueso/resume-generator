const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.get('/api/users/', UserController.apiGetAllUsers);
router.post('/api/register/', UserController.apiCreateUser);
router.get('/api/users/id/:id', UserController.apiGetUserById);
router.get('/api/users/name/:name', UserController.apiGetUserByName);

router.post('/api/login/', UserController.apiLogin);


module.exports = router;