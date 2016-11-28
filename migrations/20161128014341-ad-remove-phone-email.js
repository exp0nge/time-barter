'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.removeColumn('Ads', 'phone', Sequelize.TEXT);
    queryInterface.removeColumn('Ads', 'email', Sequelize.TEXT);



  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    queryInterface.addColumn('Ads', 'phone', Sequelize.TEXT);
    queryInterface.addColumn('Ads', 'email', Sequelize.TEXT);

  }
};
