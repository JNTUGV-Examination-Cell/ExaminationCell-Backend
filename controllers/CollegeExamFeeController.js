const College_Exam_fee = require('../models/College_Exam_fee');
const College = require('../models/College');
const Student = require('../models/Student');

exports.addCollegeExamFeeList = async(req,res)=>{
    try{
        const data = req.body;

    }catch(error){
        res.status(500).json({message:"Error in adding College Exam Fee List"});
    }
}