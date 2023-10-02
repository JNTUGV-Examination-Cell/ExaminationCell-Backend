const sequelize = require('./connection');
const config = require("./config.json")

const createDatabaseIfNotExists = async () => {
  try {
    // Check if the database already exists
    await sequelize.queryInterface.showAllSchemas();

    // If the database doesn't exist, create it
    console.log('Database does not exist. Creating...');
    await sequelize.queryInterface.createSchema(config.database);
    console.log('Database created.');
  } catch (error) {
    console.error('Error creating the database:', error);
  }
};

module.exports = createDatabaseIfNotExists;
