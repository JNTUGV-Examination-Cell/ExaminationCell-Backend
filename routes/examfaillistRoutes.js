const express = require("express");
// const branchController = require("../controllers/branchController");
const examfaillistController=require("../controllers/ExamfaillistController")
const router = express.Router();


//METHOD: post
//api:  /api/examfail/addfailstudents
// Description: Add all the branches
router.post('/addfailstudents',examfaillistController.addfailstudents);



module.exports = router;
