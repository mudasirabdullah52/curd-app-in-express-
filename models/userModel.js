// models/userModel.js
const { DataTypes } = require('sequelize');
const db = require('./index');

const User = db.sequelize.define('Myuser', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
