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
    is_active,
    is_deleted,
    configTable
} = require('../lib/default_values')(Sequelize);

module.exports = function setupPublicDocumentModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('public_document',{
        // Common of all tables
        i_code,
        identifier,

        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        extension: {
            type: Sequelize.STRING(30),
            allowNull: false,
        },
        // file:{
        //     // ¿¿ ??? 
        // },
        id_complaint: {
            type: Sequelize.UUID,
        },

        // Common of all tables
        ts_created,
        ts_updated,
        ts_deleted,
        is_deleted,
        is_active
        
    }, configTable);
};