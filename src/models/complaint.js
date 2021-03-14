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

module.exports = function setupComplaintModel(config){
    const sequelize = setupDatabase(config);

    return sequelize.define('complaint',{
        // Common of all table

        i_code,
        identifier,

        number_case: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        denounced: {
            type: Sequelize.STRING,
            allowNull: false
        },
        positionDenounced: {
            type: Sequelize.STRING,
        },
        businessDenounced:{
            tyepe: Sequelize.STRING,
        },
        unitDenounced:{
            type: Sequelize.STRING,
        },
        sector: {
            type: Sequelize.STRING,
        },
        lost_currency: {
            type: Sequelize.STRING,
        },
        lost_value: {
            type: Sequelize.INTEGER,
        },
        reception_channel: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        status_investigation: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        complaint_check: {
            type: Sequelize.STRING,
        },
        summary: {
            type: Sequelize.TEXT,
        },
        conclusion: {
            type: Sequelize.TEXT,
        },
        is_anonymous: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        is_exception: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        is_dereive: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        date_dereive: {
            type: Sequelize.DATE,
        },
        date_estimated_close: {
            type: Sequelize.DATE,
        },
        date_resolution: {
            type: Sequelize.DATE,
        },
        id_status_case:{
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_people:{
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_clasification:{
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_branch_office:{
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_area_company:{
            type: Sequelize.UUID,
            allowNull: false,
        },
        id_bussiness:{
            type: Sequelize.UUID,
            allowNull: false,
        },

        // Common of all tables
        ts_created,
        ts_updated,
        ts_deleted,
        is_deleted,
        is_active

    },configTable);
};