const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College = require('./College');
const Regulation_courses = require('./Regulation_Course');
const Courses = require('./Courses');

const Batch = sequelize.define('batches', {
  batch_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  batch_college_code: {
    type: DataTypes.STRING,
    references: {
      model: College,
      key: 'college_code',
    },
    allowNull: false,
  },
  study_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  regulation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  starting_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ending_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  regulation_course_title: {
    type: DataTypes.STRING,
    references: {
      model: Regulation_courses,
      key: 'regulation_courses_title',
    },
    allowNull: false,
  },
  course: {
    type: DataTypes.STRING,
    references: { 
      model: Courses,
      key: 'course',
    },
    allowNull: false,
},

}, {
  tableName: 'batches',
  timestamps: false,
});

module.exports = Batch;
