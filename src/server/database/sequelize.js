const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
console.log("in sequelize.js before config")
dotenv.config();
console.log("in sequelize.js after config")
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306,  // ✅ Add port here
    dialect: 'mysql',
    logging: false,
  }
);

module.exports = sequelize;

