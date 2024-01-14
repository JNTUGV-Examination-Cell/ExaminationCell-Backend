const courseController = require('./controllers/courseController');
const collegesController = require('./controllers/collegeController');
const branchController = require('./controllers/branchController');
const staffController = require('./controllers/staffController');
const batchController = require('./controllers/batchController');
const userController = require('./controllers/userController');
const districtController = require('./controllers/districtsController');
const ipaddressController = require('./controllers/ipaddressController');
const notificationController = require('./controllers/notificationController');

const controllers = [
    collegesController.addColleges,
    courseController.addCourse,
    branchController.addBranches,
    courseController.addRegulation,
    courseController.addRegulationcourses,
    courseController.addRegulationcoursesset,
    courseController.addSubject,
    staffController.addStaff,
    batchController.addBatches,
    userController.addUsers,
    notificationController.addNotifications,
    ipaddressController.addipaddress,
    districtController.addDistricts
    
  ];
  
  const executeSequentially = async () => {
    for (const controller of controllers) {
      try {
        await controller();
      } catch (error) {
        console.error(error);
        // Handle errors here, if required
      }
    }
    
  };
  

  executeSequentially();
  