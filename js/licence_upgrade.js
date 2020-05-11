/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('licence_upgrade', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    licence_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'licences',
        key: 'id'
      }
    },
    upgrade_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'upgrades',
        key: 'id'
      }
    },
    count: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    expiration_date: {
      type: DataTypes.DATE,
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
    }
  }, {
    tableName: 'licence_upgrade',
    timestamps: false,
    version: false
  });
};
