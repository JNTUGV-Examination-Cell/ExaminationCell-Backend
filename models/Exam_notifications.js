const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Examination = require("../models/Examination");
const college=require('../models/College');
const Batch=require('../models/Batch');
const Regulation_course_set = require('../models/Regulation_Courses_Set');

const Exam_notification = sequelize.define(
  "exam_notification",
  {
    notification_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    date: { 
      type: DataTypes.DATE,
      allowNull: false,
    },
    exam_code: {
      type: DataTypes.STRING,
     primaryKey:true,
    },
    college_code: {
        type: DataTypes.STRING,
        references:{
            model:college,
            key:'college_code'
        },
        allowNull:false
    },
    batch_id:{
      type : DataTypes.INTEGER,
      references:{
          model: Batch,
          key: 'batch_id'
      },
      allowNull: false
    },
    regulation_courses_set_id:{
      type : DataTypes.INTEGER,
      references:{
          model: Regulation_course_set,
          key: 'regulation_courses_set_id'
      },
      allowNull: false,
  }, 
    payment_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    branch: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exam_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exam_month:{
      type : DataTypes.STRING,
      allowNull: false
    },
    exam_date:{
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    type:{
      type:DataTypes.ENUM('regular','supply'),
      allowNull: false 
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    last_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    late_fee: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    late_fee_lastdate: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    notification_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tablename: "exam_notification",
    timestamps: false,
  }
);

Exam_notification.afterCreate(async (notification, options) => {
  try {
      await Examination.create({
          exam_code: notification.exam_code,
          college_code: notification.college_code,
          batch_id:notification.batch_id,
          regulation_courses_set_id:notification.regulation_courses_set_id,
          type:notification.type,
          month:notification.exam_month,
          year:notification.exam_year,
          date:notification.exam_date
      });
  } catch (error) {
      console.error('Error creating examination:', error);
  }
});

module.exports = Exam_notification;