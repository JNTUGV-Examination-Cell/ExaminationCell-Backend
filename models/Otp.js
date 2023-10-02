const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Otp = sequelize.define('otp', {
  otp_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
        model: User,
        key: 'user_id'
      },
    allowNull: false
  },
  otp: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.STRING,
    allowNull: false

  },
  expiry_at:{
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, {
  tableName: 'otp',    
  timestamps: false     
});

module.exports = Otp;
