/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {agent_salesInstance, agent_salesAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<agent_salesInstance, agent_salesAttribute>('agent_sales', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    agent_id_contpaqi: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    external_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    percent: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    agent_key_contpaqi: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'agent_sales',
    timestamps: false,
    version: false
  });
};
