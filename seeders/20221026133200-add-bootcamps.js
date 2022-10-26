'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Bootcamps', [{
       
        name: 'John Doe',
        description: 'PHP advanced',
        website: 'hola',
        phone: '3214569871',
        average_rating: 124,
        average_cost: 45678
     }], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('Bootcamps', null, {});
    
  }
};
