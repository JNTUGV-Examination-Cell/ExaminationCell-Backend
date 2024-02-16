const Exam_notification = require("../models/Exam_notification");
const path = require("path");

// const jsonFilePath = path.join(__dirname, '../data/districts_data.json');

exports.addexam_notification = async (req, res) => {
  try {
    const data = req.body;

    for (const item of data) {
      const currentdate = new Date();
      await Exam_notification.create({
        date: currentdate,
        college_code: item.college_code,
        exam_code: item.exam_code,
        payment_status: item.payment_status,
        course: item.course,
        branch: item.branch,
        year: item.year,
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

exports.fetchAllExam_notifications = async (req, res) => {
  try {
    let query = {};
    if (req.query.college_code) {
      query.college_code = req.query.college_code;
    }
    if (req.query.course) {
      query.course = req.query.course;
    }
    if (req.query.branch) {
      query.branch = req.query.branch;
    }
    if (req.query.year) {
      query.year = req.query.year;
    }

    const exam_notifications = await Exam_notification.findAll({
      where: query,
    });

    res.status(200).json(exam_notifications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in fetching exam_notification data", error });
  }
};

exports.deletenotification = async (req, res) => {
  try {
    await Exam_notification.destroy({
      where: {},
      truncate: true,
    });

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error in deleting exam_notification data" });
  }
};

exports.fetchCourses = async (req, res) => {
  try {
    const courses = await Exam_notification.findAll({
      attributes: ["course"],
      group: ["course"],
    });

    const courseNames = courses.map((course) => course.course);
    res.status(200).json(courseNames);
  } catch (error) {
    res.status(500).json({ message: "Error in fetching courses" });
  }
};

exports.fetchBranches = async (req, res) => {
  try {
    const branches = await Exam_notification.findAll({
      attributes: ["branch"],
      group: ["branch"],
    });

    const branchNames = branches.map((branch) => branch.branch);
    res.status(200).json(branchNames);
  } catch (error) {
    res.status(500).json({ message: "Error in fetching branches" });
  }
};
exports.fetchCollegecode = async (req, res) => {
  try {
    const college_code = await Exam_notification.findAll({
      attributes: ["college_code"],
      group: ["college_code"],
    });

    const collegecodes = college_code.map(
      (college_code) => college_code.college_code
    );
    res.status(200).json(collegecodes);
  } catch (error) {
    res.status(500).json({ message: "Error in fetching courses" });
  }
};
