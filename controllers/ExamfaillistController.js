const Exam_Fail_List = require('../models/Exam_Fail_List');


exports.addfailstudents = async (req, res) => {
    try {
      const data = req.body;
  
      for (const item of data) {
       const CurrentDate = new Date();
        await Exam_Fail_List.create({
          date_time: CurrentDate,
          subject_code:item.subject_code,
          roll_no:item.roll_no,
          exam_fail_reason:item.exam_fail_reason
        });
      }
  
      // console.log('Colleges data added successfully');
      res.status(200).json({message:"exam fail students data added successfully"});
  
    } catch (error) {
      res.status(500).json({message:"Error in adding exam fail data"});
       
    }
  };