const express = require("express");
const regulationsController = require("../controllers/regulationsController");
const router = express.Router();


//METHOD: post
//api:  /api/branch/addRegulations
// Description: Add all the Regulations
router.post('/addRegulations',regulationsController.addRegulations);

//METHOD: get
//api:  /api/branch/getCompleteRegulations
//Fetches the regulations table records completely
router.get('/getCompleteRegulations',regulationsController.getCompleteRegulations);

module.exports = router;