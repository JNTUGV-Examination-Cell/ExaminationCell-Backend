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
const Regulation_Courses = require('./models/Regulation_Course');
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


const models = [College, Staff,Attendence,Course, Branch, Regulation, Regulation_Courses, Batch, User, Student,Otp, District, Regulation_Courses_Set, Subject,examination,Ipaddress,Notification,examination_students_list];

Promise.all(models.map(model => model.sync()))
  .then(() => {
    console.log("All models synced");
  });


const port = process.env.PORT || 9000;

// Start server
app.listen(port, function () {
    console.log('Server is running on port 9000');
});