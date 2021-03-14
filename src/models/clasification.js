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

module.exports = function setupClasificationModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('clasification',{
        // Common of all tables
        i_code,
        identifier,
    
        name_eng: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name_esp: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        name_pt: {
            type: Sequelize.STRING,
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