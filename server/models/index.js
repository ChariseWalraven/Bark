const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false
  },
  doglikestotal: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},
{
  tableName: 'bark',
  timestamps: false
})


module.exports = User
