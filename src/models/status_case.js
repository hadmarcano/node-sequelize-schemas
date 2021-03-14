/* eslint-disable camelcase */

'use strict';

const Sequelize = require('sequelize');
const setupDatabase = require('../lib/db');

const {
    i_code,
    identifier,
    is_deleted,
    ts_created,
    ts_updated,
    ts_deleted,
    is_active,
    configTable
} = require('../lib/default_values')(Sequelize);

module.exports = function setupStatusCaseModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('status_case',{
        // Common of all tables
        i_code,
        identifier,

        name: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        // Common of all tables
        ts_created,
        ts_updated,
        ts_deleted,
        is_deleted,
        is_active

    }, configTable);
};