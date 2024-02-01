const express = require("express");
const branchController = require("../controllers/branchController");
const router = express.Router();


//METHOD: post
//api:  /api/branch/addBranches
// Description: Add all the branches
router.post('/addBranches',branchController.addBranches);







module.exports = router;
