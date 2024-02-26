const express = require("express");
const router = express.Router();
const collegeController = require("../controllers/collegeController");

//METHOD: post
//api:  /api/college/addColleges
// Description: Add all the colleges into college table
router.post('/addColleges',collegeController.addColleges);

//METHOD: get
//api:  /api/college/fetchColleges
// Description: get all the colleges from college table
router.get('/fetchColleges',collegeController.fetchColleges);

module.exports = router;