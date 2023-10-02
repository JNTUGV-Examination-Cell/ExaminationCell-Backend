const sequelize = require('./connection');

const createTablesIfNotExists = async () => {
  try {
    await sequelize.sync({ force: false }); // Use { force: false } to avoid dropping existing tables
    console.log('Tables created or already exist.');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

module.exports = createTablesIfNotExists;
