/* eslint-disable camelcase */
'use strict';

var Sequelize = require('sequelize');

var setupDatabase = require('../lib/db');

var _require = require('../lib/default_values')(Sequelize),
    i_code = _require.i_code,
    identifier = _require.identifier,
    is_deleted = _require.is_deleted,
    ts_created = _require.ts_created,
    ts_updated = _require.ts_updated,
    ts_deleted = _require.ts_deleted,
    is_active = _require.is_active,
    configTable = _require.configTable;

module.exports = function setupActionCloseModel(config) {
  var sequelize = setupDatabase(config);
  return sequelize.define('action_close', {
    // Common of all tables
    i_code: i_code,
    identifier: identifier,
    name: {
      type: Sequelize.STRING,
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