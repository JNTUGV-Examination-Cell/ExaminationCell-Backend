const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const College = require("./College");
const Batch = require("./Batch");
const Regulation_course_set = require("./Regulation_Courses_Set");

const Examination = sequelize.define(
  "examinations",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    exam_code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    college_code: {
      type: DataTypes.STRING,
      references: {
        model: College,
        key: "college_code",
      },
      allowNull: false,
    },
    batch_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Batch,
        key: "batch_id",
      },
      allowNull: false,
    },
    regulation_courses_set_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Regulation_course_set,
        key: "regulation_courses_set_id",
      },
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "examinations",
    timestamps: false,
  }
);
module.exports = Examination;
