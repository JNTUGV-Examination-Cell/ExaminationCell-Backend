const express = require("express");
const router = express.Router();
const ipaddressController = require("../controllers/ipaddressController");

//METHOD: post
//api/ipaddress/addipaddress
// Description: Add all the ipaddress into  table
router.post('/addipaddress',ipaddressController.addipaddress);


//METHOD: get
//api/ipaddress/verifyIpaddress
// Description: To verify whether a given IP is present in the database ot not
router.get('/verifyIpaddress',ipaddressController.verifyIpaddress);

//METHOD: post
//api/ipaddress/updateipaddress
//Updates new ipaddresses into database
router.post('/updateipaddress',ipaddressController.updateipaddress);


module.exports = router;