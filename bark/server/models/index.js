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
  },
  CHIHUAHUA: {
    type: Sequelize.INTEGER,
  },
  CARDIGAN_CORGI: {
    type: Sequelize.INTEGER,
  },
  GERMANSHEPHERD: {
    type: Sequelize.INTEGER,
  },
  BASSET_HOUND: {
    type: Sequelize.INTEGER,
  },
  LABRADOR: {
    type: Sequelize.INTEGER,
  },
  MALAMUTE: {
    type: Sequelize.INTEGER,
  },
  STANDARD_POODLE: {
    type: Sequelize.INTEGER,
  },
  DACHSHUND: {
    type: Sequelize.INTEGER,
  },
  BORDER_COLLIE: {
    type: Sequelize.INTEGER,
  },
  GREAT_DANE: {
    type: Sequelize.INTEGER,
  }
  },{
  tableName: 'bark',
  timestamps: false
})


module.exports = User
