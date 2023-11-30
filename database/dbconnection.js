const Sequelize = require('sequelize');
const sequelize = new Sequelize('appointment-db', 'root', 'Mudasir@1231', {
    dialect: 'mysql',
    host: 'localhost',

})
module.exports = sequelize;