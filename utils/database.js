const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-project', 'root', 'nodecomplete', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;