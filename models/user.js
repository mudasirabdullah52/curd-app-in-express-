const Sequelize = require('sequelize');
const sequelize = require('../database/dbconnection');

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    amount: Sequelize.INTEGER,
    description: Sequelize.STRING,
    category: Sequelize.STRING
});

module.exports = Expense;