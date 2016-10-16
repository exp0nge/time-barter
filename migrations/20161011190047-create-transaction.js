'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      initUsername: {
        type: Sequelize.STRING
      },
      secondaryUsername: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      accepted: {
        type: Sequelize.BOOLEAN,
        defaultValue: null
      },
      canceled: { // valid only if responded === True
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      canceledReason: {
        type: Sequelize.TEXT
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Transactions');
  }
};
