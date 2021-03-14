'use strict';

var Sequilize = require('sequelize');

var sequelize = null; // Patron Singleton

module.exports = function setupDatabase(config) {
  if (!sequelize) {
    sequelize = new Sequilize(config);
  }

  return sequelize;
};