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

module.exports = function setupBusinessUserModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('business_user',{
        // Common of al tables
        i_code,
        identifier,

        id_business: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_user: {
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_role:{
            type: Sequelize.UUID,
            allowNull: false,
        },
        
        // Common of all tables
        is_active,
        ts_created,
        ts_updated,
        ts_deleted,
        is_deleted

    }, configTable);

};
