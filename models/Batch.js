const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const College = require('./College');


const Batch = sequelize.define('batches', {
  batch_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  batch_college_code: {
    type: DataTypes.STRING,
    references: {
        model: College,
        key: 'college_code'
      },
    allowNull: false
  },
  study_type: {
    type: DataTypes.STRING,
    allowNull: false

  },
  regulation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  starting_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  ending_year: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
  
}, {
  tableName: 'batches',    
  timestamps: false     
});

module.exports = Batch;