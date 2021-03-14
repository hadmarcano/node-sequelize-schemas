/* eslint-disable camelcase */

'use strict';

const Sequelize = require('sequelize');
const setupDatabase = require('../lib/db');

const {
  i_code,
  identifier,
  is_deleted,
  ts_created,
  ts_updated,
  ts_deleted,
  is_active,
  configTable
} = require('../lib/default_values')(Sequelize);

module.exports = function setupAddressModel(config) {
  const sequelize = setupDatabase(config);

  return sequelize.define('addresses', {
    // Common of all tables
    i_code,
    identifier,

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
    is_deleted,
    is_active,
    ts_created,
    ts_updated,
    ts_deleted

  }, configTable);
};
