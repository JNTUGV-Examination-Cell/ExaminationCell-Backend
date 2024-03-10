const Exam_notification = require("../models/Exam_notifications");
const Regulation_Course = require("../models/Regulation_Course");
const Examination=require("../models/Examination");
const College=require("../models/College");
const Regulation_Course_Set = require("../models/Regulation_Courses_Set");
const Batch = require("../models/Batch");
const subjects = require("../models/Subject");


exports.addexam_notification = async (req, res) => {
  try {
    const data = req.body;
    const colleges=await College.findAll({attributes:['college_code']});
    let message= "";
    for (const item of data) {
      const currentdate = new Date();
      const [date, month, year] = item.exam_date.split('-');
      const examdate = new Date(`${year}-${month}-${date}`);
      const regulation_title=item.course+" "+item.regulation;
      const regulation_courseset_ids=await Regulation_Course_Set.findOne({where:{regulation_courses_title:regulation_title}});
      const regulationcourses=await Regulation_Course.findOne({where:{regulation_courses_title:regulation_courseset_ids.regulation_courses_title}});
      const batch_ids=await Batch.findOne({where:{batch_college_code:item.college_code,regulation_course_title:regulation_courseset_ids.regulation_courses_title}});
      const notification_id = generateNotificationId(item.regulation,regulationcourses.studying_year,regulationcourses.regulation_courses_id,item.semester,item.type, currentdate);
      await Exam_notification.create({
        notification_id:notification_id,
        date: currentdate,
        payment_status: item.payment_status,
        course: item.course,
        branch: item.branch,
        course_year: item.course_year,
        exam_full_date:examdate, 
        type:item.type, 
        fee: item.fee,
        last_date: item.last_date, 
        late_fee: item.late_fee,
        late_fee_lastdate: item.late_fee_lastdate,
        notification_title: item.notification_title,
      }); 
      message = message + "exam notificatin data added successfully  ";
      for(const value of colleges){
        if(await Examination.findOne({where:{exam_code:notification_id,college_code:value.college_code,batch_id:batch_ids.batch_id}}))
        {
        message+=`${notification_id}+" "+${value.college_code}+" already exists for "+${item.batch_id}+"   "`;
        continue; 
      }
      await Examination.create({
        exam_code:notification_id, 
        college_code:value.college_code,
        batch_id: batch_ids.batch_id, 
        regulation_courses_set_id: regulation_courseset_ids.regulation_courses_set_id,
        type: item.type,
        month:month,
        year:year,
        date:date
      });}
    }
    message=message+"examination data also added successfully"; 
    res .status(200).json(message);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding exam notification data" });
  }
};
const generateNotificationId = (regualtion,studying_year,regulation_courses_id,semester,exam_type,currentDate) => {
  const timestamp = currentDate.getFullYear();
  return `${regualtion}${regulation_courses_id}${studying_year}${semester}${timestamp}${exam_type.charAt(0).toUpperCase()}`;
}


exports.fetchAllExam_notifications = async (req, res) => {
  try {
    const exam_notifications = await Exam_notification.findAll();

    res.status(200).json(exam_notifications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in fetching all exam_notification data" });
  }
};   




exports.analyzeNotification = async (req, res) => {
  try {
    const { notification_id } = req.params;

    // Extract data from notification_id
    const regulation_code = notification_id.substring(0, 3);
    const course_id = notification_id.substring(3, 4);
    const course_year = notification_id.substring(6, 11);
    const type = notification_id.substring(11, 12);

    // Query the database for relevant data
    const regulation = await regulation.findOne({
      where: { regulation_code }
    });

    const course = await course.findByPk(course_id);

    const examNotification = await Exam_notification.findOne({
      where: { course_year, type }
    });

    if (!regulation || !course || !examNotification) {
      return res.status(404).json({ message: "Data not found" });
    }

    // Construct the response object
    const response = {
      regulation: regulation.regulation, // Assuming 'regulation' is the field name in the 'Regulation' model
      course_name: course.course_name, // Assuming 'course_name' is the field name in the 'Course' model
      course_full_name: examNotification.course_full_name, // Assuming 'course_full_name' is the field name in the 'Exam_notification' model
      course_year,
      type
    };

    // Fetch subject names from the subject table
    const subjects = await subjects.findAll({
      attributes: ['subject_name'],
      where: {
        regulation_courses_set_id: examNotification.regulation_courses_set_id, // Assuming 'regulation_courses_set_id' is the field name in the 'Exam_notification' model
        branch_id: examNotification.branch_id // Assuming 'branch_id' is the field name in the 'Exam_notification' model
      }
    });

    response.subjects = subjects.map(subject => subject.subject_name);

    res.status(200).json(response);
  } catch (error) {
    console.error("Error in analyzing notification_id:", error);
    res.status(500).json({ message: "Error in analyzing notification_id" });
  }
};
