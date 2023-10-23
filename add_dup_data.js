const courseController = require('./controllers/courseController');
const collegesController = require('./controllers/collegeController');
const branchController = require('./controllers/branchController');
const staffController = require('./controllers/staffController');

const controllers = [
    collegesController.addColleges,
    courseController.addCourse,
    branchController.addBranches,
    courseController.addRegulation,
    courseController.addRegulationcourses,
    courseController.addRegulationcoursesset,
    courseController.addSubject,
    staffController.addStaff
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
  