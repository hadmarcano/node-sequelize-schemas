/* eslint-disable camelcase */

"use strict";

const Sequelize = require("sequelize");
const setupDatabase = require("../lib/db");
const {
  i_code,
  identifier,
  ts_deleted,
  ts_created,
  ts_updated,
  is_deleted,
  is_active,
  configTable,
} = require("../lib/default_values")(Sequelize);

module.exports = function setupRoleModel(config) {
  const sequelize = setupDatabase(config);

  return sequelize.define(
    "role",
    {
      // Common of all tables
      i_code,
      identifier,

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
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
