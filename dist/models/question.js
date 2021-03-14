/* eslint-disable camelcase */
"use strict";

var Sequelize = require("sequelize");

var setupDatabase = require("../lib/db");

var _require = require("../lib/default_values")(Sequelize),
    i_code = _require.i_code,
    identifier = _require.identifier,
    ts_deleted = _require.ts_deleted,
    ts_created = _require.ts_created,
    ts_updated = _require.ts_updated,
    is_deleted = _require.is_deleted,
    is_active = _require.is_active,
    configTable = _require.configTable;

module.exports = function setupQuestionModel(config) {
  var sequelize = setupDatabase(config);
  return sequelize.define("question", {
    // Common of all tables
    i_code: i_code,
    identifier: identifier,
    text_eng: {
      type: Sequelize.STRING,
      allowNull: false
    },
    text_esp: {
      type: Sequelize.STRING,
      allowNull: false
    },
    text_pt: {
      type: Sequelize.STRING,
      allowNull: false
    },
    // Common of all tables
    is_active: is_active,
    ts_created: ts_created,
    ts_updated: ts_updated,
    ts_deleted: ts_deleted,
    is_deleted: is_deleted
  }, configTable);
};