const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize'); // we'll define this next

const TrainingEnquiry = sequelize.define('TrainingEnquiry', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  graduationYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  syllabusPath: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'training_enquiries',
  timestamps: true, // adds createdAt and updatedAt
});

module.exports = TrainingEnquiry;
