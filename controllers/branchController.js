const branch = require("../models/Branches");
const fs = require('fs');
const path = require('path');
const Branch = require("../models/Branches");
require('dotenv').config({ path: 'cred.env' });

const jsonFilePath = path.join(__dirname, '../data/branches_data.json');


exports.addBranches = async(req,res) => {
    try{
      const jsonData = fs.readFileSync(jsonFilePath, 'utf8');
      const data = JSON.parse(jsonData);

      for (const item of data) {
        await branch.create({
          course: item.course,
          branch: item.branch,
          branch_full_name: item.branch_full_name,
          branch_specialization: item.branch_specialization,
          branch_code: item.branch_code,
        });
      }

      console.log('Branches data added successfully');
      

    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Error in adding the Branches"});
    }
};


exports.getCompleteBranches = async (req, res) => {
  try {
    const Branches = await Branch.findAll(); // Retrieve all records from the Branches model

    res.status(200).json(Branches); // Respond with the JSON data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getting the list of branches" });
  }
};
