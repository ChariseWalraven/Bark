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
  chihuahua: {
    type: Sequelize.INTEGER,
  },
  cardigan_corgi: {
    type: Sequelize.INTEGER,
  },
  germanshepherd: {
    type: Sequelize.INTEGER,
  },
  basset_hound: {
    type: Sequelize.INTEGER,
  },
  labrador: {
    type: Sequelize.INTEGER,
  },
  malamute: {
    type: Sequelize.INTEGER,
  },
  standard_poodle: {
    type: Sequelize.INTEGER,
  },
  dachshund: {
    type: Sequelize.INTEGER,
  },
  border_collie: {
    type: Sequelize.INTEGER,
  },
  great_dane: {
    type: Sequelize.INTEGER,
  }
  },{
  tableName: 'bark',
  timestamps: false
})


module.exports = User
