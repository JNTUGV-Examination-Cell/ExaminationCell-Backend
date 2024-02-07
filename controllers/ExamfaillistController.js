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


  
exports.fetchfaildStudents = async (req, res) => {
  const subject_code = req.params.subject_code;
  // const college_code=req.params.college_code;
  try {
    const fail_students = await Exam_Fail_List.findAll({where: { subject_code: subject_code}
    });

    // Check if any qualified students were found
    if (fail_students.length === 0) {
        console.log("No fail students found for the provided exam code");
        return res.status(404).json({ message: "No fail students found for the provided exam code" });
    }
    // const studentIds = qualified_students.map(Student => Student.student_id);

    // const student_details= await Student.findAll({where:{student_id:studentIds}})

    res.status(200).json(fail_students);

} catch (error) {
    console.error("Error in fetching fail student data:", error);
    res.status(500).json({ message: "Error in fetching student data" });
}
};

