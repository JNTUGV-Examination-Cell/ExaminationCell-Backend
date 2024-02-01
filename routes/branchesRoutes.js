const express = require("express");
const branchController = require("../controllers/branchController");
const router = express.Router();


//METHOD: post
//api:  /api/branch/addBranches
// Description: Add all the branches
router.post('/addBranches',branchController.addBranches);

//METHOD :get
//api : /api/branch/getCompleteBranches
//Fetches the branches table records completely
router.get("/getCompleteBranches",branchController.getCompleteBranches);



module.exports = router;
