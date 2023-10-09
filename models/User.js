const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
  
}, {
  tableName: 'user',    
  timestamps: false     
});

module.exports = User;
