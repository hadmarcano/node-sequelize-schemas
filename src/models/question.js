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

module.exports = function setupQuestionModel(config) {
  const sequelize = setupDatabase(config);

  return sequelize.define(
    "question",
    {
      // Common of all tables
      i_code,
      identifier,

      text_eng: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text_esp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      text_pt: {
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
