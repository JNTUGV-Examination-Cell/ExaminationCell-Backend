const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College = require('./College');
const Staff = require('./Staff');

const User = sequelize.define('user', {
  user_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  user_staff_id: {
    type: DataTypes.BIGINT,
    references: {
        model: Staff,
        key: 'staff_id'
      },
    allowNull: false
  },
  user_college_code: {
    type: DataTypes.STRING,
    references: {
        model: College,
        key: 'college_code'
      },
    allowNull: false
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false

  }
  
}, {
  tableName: 'user',    
  timestamps: false     
});

module.exports = User;
