'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

// import Sequelize from 'sequelize';
// import db from '../db';

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { isEmail: true }
    }
});

module.exports = Student;
