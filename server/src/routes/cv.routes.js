const express = require('express');
const router = express.Router();
const UserController = require("../controllers/user.controller");
const CvController = require("../controllers/cv.controller");

/* GET ALL CVS */
router.get('/api/all/cvs/', CvController.apiGetAllCVs);

/* GET CVS FROM USER */
router.get('/api/cvs/', CvController.apiGetCVs);

/* GET CV BY ID */
router.get('/api/cv/:id',CvController.apiGetCVById);

/* TEST CREATION CV */
router.get('/api/user/cv', CvController.apiCreateCV);

module.exports = router;