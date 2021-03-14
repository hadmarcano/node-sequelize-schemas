/* eslint-disable camelcase */

"use strict";

const Sequelize = require("sequelize");
const setupDatabase = require("../lib/db");

const {
  i_code,
  identifier,
  is_deleted,
  ts_created,
  ts_updated,
  ts_deleted,
  is_active,
  configTable,
} = require("../lib/default_values")(Sequelize);

module.exports = function setupSuperB2bModel(config) {
  const sequelize = setupDatabase(config);

  return sequelize.define(
    "super_b2b",
    {
      // Common of all tables
      i_code,
      identifier,

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      // Common of all tables
      is_active,
      ts_created,
      ts_updated,
      ts_deleted,
      is_deleted,
    },
    configTable
  );
};
