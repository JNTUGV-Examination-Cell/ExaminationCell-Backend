const Users= require('../models/User');
const fs = require('fs');

exports.addUsers = async (req, res) => {
  try {
    const data = req.body;


    for (const item of data) {
      await Users.create({

       
        user_staff_id: item.user_staff_id,  
        user_college_code: item.user_college_code,
        
      });
    }
    res.status(200).json({ message: "Users data added successfully" });
    // console.log("Users data added successfully");


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error in adding user data" });


  }
};