const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College  = require('./College');


const Staff = sequelize.define('staff', {
  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true
  },
  staff_id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
  },
  id_no: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  staff_status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  staff_college_code: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
        model: College,
        key: 'college_code'
      }
  },
  qr_code: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'staff',    
  timestamps: false     
});

module.exports = Staff;