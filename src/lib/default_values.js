/* eslint-disable camelcase */

module.exports = (Sequelize) => {
    const i_code = {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
      // type: Sequelize.STRING,
      // defaultValue: false
    };
  
    const identifier = {
      allowNull: false,
      field: 'identifier',
      type: Sequelize.STRING
    };
  
    const is_deleted = {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false
    };

    const is_active = {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  
    const ts_created = {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
    };
  
    const ts_updated = {
      type: Sequelize.DATE,
      defaultValue: null
    };
  
    const ts_deleted = {
      type: Sequelize.DATE,
      defaultValue: null
    };
  
    const configTable = {
      freezeTableName: true,
      underscored: true,
      updatedAt: 'ts_updated',
      createdAt: 'ts_created'
    };
  
    return {
      i_code,
      identifier,
      is_deleted,
      ts_created,
      ts_updated,
      ts_deleted,
      is_active,
      configTable
    };
  };
  