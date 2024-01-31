const Exam = require("../models/Examination");
const path = require('path');


//POST API to Add examinations data
exports.addExams = async (req,res) => {
    try{
      const data = req.body;

      for (const item of data) {
        await Exam.create({
          exam_code: item.exam_code,
          college_code: item.college_code,
          batch_id: item.batch_id,
          regulation_courses_set_id: item.regulation_courses_set_id,
          type: item.type,
          month:item.month,
          year:item.year
        });
      }

      // console.log('Examinations data added successfully');
      res.status(200).json({message:"Examinations data added successfully"});


    }
    catch(error){
        console.error(error);
        res.status(500).json({message:"Error in adding the Examinations data"});
    }
};


//GET API to fetch data from examination table based on college_code

exports.fetchExamData = async(req,res) =>{

    const college_code = req.params.college_code;

    try{
      console.log(college_code);
        const exams = await Exam.findAll({where:{college_code:college_code}});

        if(exams.length ===0){
           res.status(200).json({message:"No examinations found for provided college code"});

        }

        res.status(200).json(exams);
        
    }catch(error){
        res.status(500).json({message:"Error in fetching examination data"});
    }


}