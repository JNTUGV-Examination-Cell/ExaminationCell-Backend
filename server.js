const express = require('express');
const cors = require('cors');
const multer = require('multer'); // Import multer
const app = express();

const Attendence = require('./models/Attendence');
const Batch = require('./models/Batch');
const College = require('./models/College');
const Otp = require('./models/Otp');
const Staff = require('./models/Staff');
const Student = require('./models/Student');
const User = require('./models/User');
const District = require('./models/Districts');
const Course = require('./models/Courses');
const Branch = require('./models/Branches');
const Regulation = require('./models/Regulation');
const Regulation_Courses = require('./models/Regulation_Courses');
const Regulation_Courses_Set = require('./models/Regulation_Courses_Set');
const Subject = require('./models/Subject');
const Ipaddress = require('./models/Ipaddress');
const Notification = require('./models/Notification');
const examination = require('./models/Examination');
const examination_students_list = require('./models/Exam_student_list');

const collegeRoutes = require('./routes/collegeRoutes');
const staffRoutes = require('./routes/staffRoutes');
const batchRoutes = require('./routes/batchRoutes');
const studentRoutes = require('./routes/studentRoutes');
const userRoutes= require('./routes/userRoutes');

// Enable CORS
app.use(cors());

// middleware
app.use(express.static("upload"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const upload = multer();
app.use(upload.any()); 


//routes
app.use('/api/college',collegeRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/user', userRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/batch', batchRoutes);

//images accesseble links
app.use('/images/qr_codes', express.static(__dirname + '/images/qr_codes'));
app.use('/images/student_profiles', express.static(__dirname + '/images/Student_profiles'));

const models = [College, Staff, User,Attendence,Course, Branch, Regulation, Regulation_Courses, Batch, Student,Otp, District, Regulation_Courses_Set, Subject,examination,Ipaddress,Notification,examination_students_list];

const syncModels = async () => {
  for (const model of models) {
    await model.sync();
  }
  console.log("All models synced");
};

syncModels();

const port = process.env.PORT || 9000;

// Start server
app.listen(port, function () {
    console.log('Server is running on port 9000');
});
