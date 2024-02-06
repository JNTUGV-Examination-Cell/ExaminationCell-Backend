const express = require("express");
const router = express.Router();
const batchController = require("../controllers/batchController");

//METHOD: post
//api:  /api/batch/addBatches
// Description: Add all the batches into college table
router.post("/addBatches",batchController.addBatches);

//METHOD: get
//api:  /api/batch/getAllBatches/:college_code
// Description: To get all the batches in the college
router.get("/getAllBatches/:college_code",batchController.getAllBatches);


//METHOD: get
//api:  /api/batch/getCompleteBatches
// Fetches the Batch table records completely
router.get("/getCompleteBatches",batchController.getCompleteBatches);


module.exports = router; 