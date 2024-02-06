const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Student = require('./Student');
const Subject = require('./Subject');



const Exam_Fail_List=sequelize.define('exam_fail_list', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date_time:{
      type:DataTypes.DATE,
      primaryKey:true,
      allowNull:false,
      defaultValue: DataTypes.NOW 
    },
    subject_code:{
      type:DataTypes.STRING,
      referencces:{
        model:Subject,
        key:'subject_code'
      },
      allowNull:false
    },
    roll_no:{
      type:DataTypes.STRING,
      // references:{
      //   model:Student,
      //   key:'roll_no'
      // }, 
      allowNull:false
    },
    exam_fail_reason:{
      type:DataTypes.ENUM('malpractice','absent'),
      allowNull:false,
    }

  }, {
    tableName: 'exam_fail_list',
    timestamps: false,
  });
  
  module.exports = Exam_Fail_List;
  