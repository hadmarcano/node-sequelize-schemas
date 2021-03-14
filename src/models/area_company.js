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

module.exports = function setupAreaCompanyModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('area_company',{
        // Common of all tables
        i_code,
        identifier,

        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        id_business:{
            type: Sequelize.UUID,
            allowNull: false        
        },

        //Common of all tables
        ts_created,
        ts_updated,
        ts_deleted,
        is_deleted,
        is_active

    }, configTable);
};
