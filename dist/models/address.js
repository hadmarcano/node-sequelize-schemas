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
    configTable = _require.configTable;

module.exports = function setupAddressModel(config) {
  var sequelize = setupDatabase(config);
  return sequelize.define('addresses', {
    // Common of all tables
    i_code: i_code,
    identifier: identifier,
    country_code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    region_code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    city_code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    public_place: {
      type: Sequelize.STRING,
      allowNull: false
    },
    postal_code: {
      type: Sequelize.STRING,
      allowNull: false
    },
    complement: {
      type: Sequelize.STRING
    },
    metadata: {
      type: Sequelize.STRING
    },
    // Common of all tables
    is_deleted: is_deleted,
    ts_created: ts_created,
    ts_updated: ts_updated,
    ts_deleted: ts_deleted
  }, configTable);
};