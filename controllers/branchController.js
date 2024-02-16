const branch = require("../models/Branches");
const fs = require('fs');
const path = require('path');
const Branch = require("../models/Branches");
require('dotenv').config({ path: 'cred.env' });


exports.addBranches = async(req,res) => {
    try{
      const data = req.body;

      for (const item of data) {
        await branch.create({
          course: item.course,
          branch: item.branch,
          branch_full_name: item.branch_full_name,
          branch_specialization: item.branch_specialization,
          branch_code: item.branch_code,
        });
      }

      res.status(200).json({message:"Branches data added successfully"});      

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



exports.updateBranch = async (req, res) => {
  const { id } = req.params; // Extract the branch ID from the request parameters
  const { course, branch, branch_full_name, branch_specialization, branch_code } = req.body; // Extract the updated data from the request body

  try {
    // Find the branch by ID
    const foundBranch = await Branch.findByPk(id);

    // If the branch_id is not found, return a 404 status
    if (!foundBranch) {
      return res.status(404).json({ message: "Branch_id not found" });
    }

    // Update the branch table with the new data
    await foundBranch.update({ course, branch, branch_full_name, branch_specialization, branch_code });

    // Respond with the updated branch data
    res.status(200).json(foundBranch);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating branches data" });
  }
};



