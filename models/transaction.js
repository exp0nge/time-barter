'use strict';
/*
initUsername: Username of barter who initiated the trade
secondaryUsername: Username of barter being initiated upon
*/

module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    initUsername: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    },
    secondaryUsername: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        nonEmpty: true
      }
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: null
    },
    canceled: { // valid only if responded === True
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    canceledReason: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // create one to many relation to Job here
      }
    }
  });
  return Transaction;
};
