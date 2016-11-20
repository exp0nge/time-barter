'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      password: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
              notEmpty: true
          }
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
              notEmpty: true
          }
      },
      phone: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
          validate: {
              notEmpty: true
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};
