const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const Notification = sequelize.define(
  "notification",
  {
    notification_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    notification_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tablename: "notification",
    timestamps: false,
  }
);

module.exports = Notification;
