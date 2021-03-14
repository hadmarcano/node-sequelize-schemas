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

module.exports = function setupBusinessModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('business',{
        // Common of all tables
        i_code,
        identifier,

        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        number_business: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        legal_person: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        brands: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        color_brand: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        id_form_complaint: {
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