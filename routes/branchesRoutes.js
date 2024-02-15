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


//METHOD : put

//api : /api/branch/updateBranch
//Updates the Branches table with new values by verifying the branch_id
router.get("/updateBranch/:id",branchController.updateBranch);



module.exports = router;
