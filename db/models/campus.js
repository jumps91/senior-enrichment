'use strict';

const Sequelize = require('sequelize');
const db = require('../../db');

// import Sequelize from 'sequelize';
// import db from '../db';

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Campus;
