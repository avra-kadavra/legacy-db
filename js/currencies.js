/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('currencies', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    currency_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    currency_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    decimals: {
      type: DataTypes.INTEGER(11),
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
    tableName: 'currencies',
    timestamps: false,
    version: false
  });
};
