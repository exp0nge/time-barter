'use strict';
module.exports = function(sequelize, DataTypes) {
  var Milestone = sequelize.define('Milestone', {
    startedAt: DataTypes.DATE,
    completedAt: DataTypes.DATE,
    updateRequests: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    fulfilled: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return Milestone;
};
