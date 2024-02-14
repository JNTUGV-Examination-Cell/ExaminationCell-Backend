const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College = require('./College');
const Batch = require('./Batch');
const Branches = require('./Branches');

const Student = sequelize.define('students', {
  // student_id:{
  //     type: DataTypes.INTEGER,
  //     autoIncrement: true,
  //     primaryKey: true,
  // },
  student_college_code: {
    type: DataTypes.STRING,
    references: {
        model: College,
        key: 'college_code'
      },
    allowNull: false
  },
  student_batch_id: {
    type: DataTypes.INTEGER,
    references: {
        model: Batch, 
        key: 'batch_id'
      },
    allowNull: false
  },
  roll_no: {
    type: DataTypes.STRING,
    primaryKey:true,
    allowNull:false

  },
  student_name: {
    type: DataTypes.STRING,
    allowNull: false

  },
  student_image: {
    type: DataTypes.STRING,
    allowNull: false

  },
  branch_id: {
    type:DataTypes.INTEGER,
    references:{
      model : Branches,
      key : 'branch_id'
    },
    allowNull: false
  },
  mobile : {
    type:DataTypes.STRING,
    allowNull:false
  },
  email : {
    type:DataTypes.STRING,
    allowNull:false
  }
  
}, {
  tableName: 'students',    
  timestamps: false     
});

module.exports = Student;
