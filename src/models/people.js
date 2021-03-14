/* eslint-disable camelcase */

"use strict";

const Sequelize = require("sequelize");
const setupDatabase = require("../lib/db");

const {
  i_code,
  identifier,
  ts_created,
  ts_updated,
  ts_deleted,
  is_deleted,
  is_active,
  configTable,
} = require("../lib/default_values")(Sequelize);

module.exports = function setupPeopleModel(config) {
  const sequelize = setupDatabase(config);

  return sequelize.define("people", {
    // Common of all table
    i_code,
    identifier,

    name: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    number_person: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
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
