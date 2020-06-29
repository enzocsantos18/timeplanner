'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('categories', [
        {
          name: 'Estudo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Fitness',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: 'Organização',
          created_at: new Date(),
          updated_at: new Date()
        }
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('categories', null, {});

  }
};
