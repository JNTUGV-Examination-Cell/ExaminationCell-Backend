const Users= require('../models/User');
const fs = require('fs');
const path = require('path');

const jsonFilePath = path.join(__dirname, '../data/user_data.json');

exports.addUsers = async (req, res) => {
  try {
    const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
    const data = JSON.parse(jsonData);

    for (const item of data) {
      await Users.create({

       
        user_staff_id: item.user_staff_id,  
        user_college_code: item.user_college_code,
        
      });
    }

    console.log("Users data added successfully");


  } catch (error) {
    console.error(error);

  }
};