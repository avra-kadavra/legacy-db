/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {payment_conceptsInstance, payment_conceptsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<payment_conceptsInstance, payment_conceptsAttribute>('payment_concepts', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    company_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    concept_id_contpaqi: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    external_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    concept_key_contpaqi: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    document_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
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
    }
  }, {
    tableName: 'payment_concepts',
    timestamps: false,
    version: false
  });
};
