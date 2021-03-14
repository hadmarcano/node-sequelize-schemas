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

module.exports = function setupFormClasificationModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('form_clasification',{
        // Common of all tables
        i_code,
        identifier,

        id_clasification: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_form_complaint:{
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