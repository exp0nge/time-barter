'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    id: {
      DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    initUsername: {
      DataTypes.STRING,
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    },
    secondaryUsername: {
      DataTypes.STRING,
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // create one to many relation to Job here
      }
    }
  });
  return Transaction;
};
