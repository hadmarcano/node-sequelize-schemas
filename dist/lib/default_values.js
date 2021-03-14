"use strict";

/* eslint-disable camelcase */
module.exports = function (Sequelize) {
  var i_code = {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true // type: Sequelize.STRING,
    // defaultValue: false

  };
  var identifier = {
    allowNull: false,
    field: 'identifier',
    type: Sequelize.STRING
  };
  var is_deleted = {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  };
  var is_active = {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  };
  var ts_created = {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  };
  var ts_updated = {
    type: Sequelize.DATE,
    defaultValue: null
  };
  var ts_deleted = {
    type: Sequelize.DATE,
    defaultValue: null
  };
  var configTable = {
    freezeTableName: true,
    underscored: true,
    updatedAt: 'ts_updated',
    createdAt: 'ts_created'
  };
  return {
    i_code: i_code,
    identifier: identifier,
    is_deleted: is_deleted,
    ts_created: ts_created,
    ts_updated: ts_updated,
    ts_deleted: ts_deleted,
    is_active: is_active,
    configTable: configTable
  };
};