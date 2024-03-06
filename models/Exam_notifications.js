const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

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
    exam_full_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM('regular', 'supply'),
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
module.exports = Exam_notification;