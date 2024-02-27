const Exam_notification = require("../models/Exam_notifications");
const Regulation_Course = require("../models/Regulation_Course");
const Regulation_Course_Set = require("../models/Regulation_Courses_Set");

exports.addexam_notification = async (req, res) => {
  try {
    const data = req.body;
 
    for (const item of data) {
      const currentdate = new Date();
      const regulationsoursetitle=await Regulation_Course_Set.findOne({where:{regulation_courses_set_id:item.regulation_courses_set_id}});
      const regulationdata=await Regulation_Course.findOne({where:{regulation_courses_title:regulationsoursetitle.regulation_courses_title}})
      const notification_id = generateNotificationId(regulationdata.regulation,regulationdata.studying_year,item.semester,item.type, currentdate);
      await Exam_notification.create({
        notification_id:notification_id,
        date: currentdate,
        batch_id:item.batch_id,
        regulation_courses_set_id:item.regulation_courses_set_id,
        payment_status: item.payment_status,
        course: item.course,
        branch: item.branch,
        course_year: item.course_year,
        exam_year:item.exam_year,
        exam_month:item.exam_month,
        exam_date:item.exam_date,
        type:item.type,
        fee: item.fee,
        last_date: item.last_date,
        late_fee: item.late_fee,
        late_fee_lastdate: item.late_fee_lastdate,
        notification_title: item.notification_title,
      });
    } 
 
    res 
      .status(200)
      .json({ message: "exam notificatin data added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding exam notification data" });
  }
};
const generateNotificationId = (regualtion,studying_year,semester,exam_type,currentDate) => {
  const timestamp = currentDate.getFullYear();
  
  return `${regualtion}${studying_year}${semester}${timestamp}${exam_type.charAt(0).toUpperCase()}`;
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