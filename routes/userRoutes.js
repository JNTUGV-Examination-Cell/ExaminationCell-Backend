const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();


//METHOD: post
//api:  /api/user/addUsers
// Description: Adding users
router.post('/addUsers',userController.addUsers);


module.exports = router;