const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');



const College = sequelize.define('colleges', {
  id:{
      type: DataTypes.INTEGER,
      autoIncrement: true
  },
  college_name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  college_code: {
    type: DataTypes.STRING,
    primaryKey: true,

  },
  district: {
    type: DataTypes.STRING,
    allowNull: false
  },
  college_type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pincode: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  college_status: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, {
  tableName: 'colleges',    
  timestamps: false     
});

module.exports = College;
