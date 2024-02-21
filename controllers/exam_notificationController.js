const Exam_notification = require("../models/Exam_notifications");

exports.addexam_notification = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      const currentdate = new Date();
      await Exam_notification.create({
        date: currentdate,
        exam_code: item.exam_code,
        college_code:item.college_code,
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
    // console.log("Districts data added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in adding exam notification data" });
  }
};

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
 