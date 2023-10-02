const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const College = require('./College');
const Staff = require('./Staff');

const Attendence = sequelize.define('attendence', {
  id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  attendence_staff_id: {
    type: DataTypes.BIGINT,
    references: {
        model: Staff,
        key: 'staff_id'
      },
    allowNull: false
  },
  staff_college_code: {
    type: DataTypes.STRING,
    references: {
        model: College,
        key: 'college_code'
      },
    allowNull: false
  }
  
}, {
  tableName: 'attendence',    
  timestamps: false     
});

module.exports = Attendence;
