const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Examination = require("../models/Examination");

const Exam_notification = sequelize.define(
  "exam_notification",
  {
    notification_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    exam_code: {
      type: DataTypes.STRING,
      references: {
        model: Examination,
        key: "exam_code",
      },
    },

    college_code: {
      type: DataTypes.STRING,
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
    year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    last_date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    late_fee: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
