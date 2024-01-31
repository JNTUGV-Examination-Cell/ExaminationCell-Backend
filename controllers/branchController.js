const branch = require("../models/Branches");
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