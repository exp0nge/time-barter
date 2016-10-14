'use strict';
module.exports = function(sequelize, DataTypes) {
  var barter = sequelize.define('barter', {
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    body: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return barter;
};