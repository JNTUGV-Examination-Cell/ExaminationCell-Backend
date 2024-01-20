const express = require("express");
const staffController = require("../controllers/staffController");
const router = express.Router();

//METHOD: post
//api:  /api/staff/addStaff
// Description: Add staff to the respective colleges
router.post('/addStaff',staffController.addStaff);

//METHOD: post
//api:  /api/staff/user/addUser/:staffId
// Description: Add user 
router.post('/user/addUser/:staffId',staffController.addUser);


//METHOD: POST
//api: /api/staff/user/sendOtp
// Description : sending the otp to the user from the staff
router.post('/user/sendOtp',staffController.sendOtp);

//METHOD: GET
//api: /api/staff/user/verifyOtp
//Description: verify the otp for the user who tried to login
router.post('/user/verifyOtp',staffController.verifyOtp);

module.exports = router;