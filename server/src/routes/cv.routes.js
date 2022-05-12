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

/* PATCH CV IN SESSION BY ID */
router.patch('/api/cv/:id',CvController.apiPatchCVById);

/* SAVE CHANGED CVS STORED IN SESSION IN BDD */
router.get('/api/cvs/save',CvController.apiSaveCVs);

/* CREATION CV */
router.post('/api/user/cv', CvController.apiCreateCV);

/* DELETE CV */
router.delete('/api/user/cv/:id',CvController.apiDeleteCV)

module.exports = router;