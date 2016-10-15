'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Milestones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startedAt: {
        type: Sequelize.DATETIME
      },
      completedAt: {
        type: Sequelize.DATETIME
      },
      deadline: {
        type: Sequelize.DATE
      },
      updateRequests: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      fulfilled: {
        type: Sequelize.BOOLEAN,
        defaultValue: null
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
    return queryInterface.dropTable('Milestones');
  }
};
