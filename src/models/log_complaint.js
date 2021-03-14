/* eslint-disable camelcase */

'use strict';

const Sequelize = require('sequelize');
const setupDatabase = require('../lib/db');
const {
    i_code,
    identifier,
    ts_created,
    ts_updated,
    ts_deleted,
    is_deleted,
    is_active,
    configTable
} = require('../lib/default_values')(Sequelize);

module.exports = function setupLogComplaintModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('log_complaint',{
        // Common of all tables
        i_code,
        identifier,

        action: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_people: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_complaint: {
            type: Sequelize.UUID,
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