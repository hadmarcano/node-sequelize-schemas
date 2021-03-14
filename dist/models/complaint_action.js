/* eslint-disable camelcase */
'use strict';

var Sequelize = require('sequelize');

var setupDatabase = require('../lib/db');

var _require = require('../lib/default_values')(Sequelize),
    i_code = _require.i_code,
    identifier = _require.identifier,
    ts_created = _require.ts_created,
    ts_updated = _require.ts_updated,
    ts_deleted = _require.ts_deleted,
    is_deleted = _require.is_deleted,
    is_active = _require.is_active,
    configTable = _require.configTable;

module.exports = function setupComplaintActionModel(config) {
  var sequelize = setupDatabase(config);
  return sequelize.define('complaint_action', {
    // Common of all tables
    i_code: i_code,
    identifier: identifier,
    id_action_close: {
      type: Sequelize.UUID,
      allowNull: false
    },
    id_complaint: {
      type: Sequelize.UUID,
      allowNull: false
    },
    // Common of all tables
    ts_created: ts_created,
    ts_updated: ts_updated,
    ts_deleted: ts_deleted,
    is_deleted: is_deleted,
    is_active: is_active
  }, configTable);
};