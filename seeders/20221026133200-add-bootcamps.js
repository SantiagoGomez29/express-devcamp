'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('bootcamps', [{
        name: 'PHP Bootcamp',
        description: 'Bootcamps for PHP learning',
        website: 'PHPAdvanced.com',
        phone: '3214569871',
        average_rating: 4500,
        average_cost: 3,
        user_id: 1
       },

       {
         name: 'Express Backend',
         description: 'Bootcamps for Javasrcipt learning',
         website: 'JavaScriptAdvanced.com',
         phone: '(57)6011111',
         average_rating: 4500,
         average_cost: 3,
         user_id: 2
       },

       {
         name: 'CSS Backend',
         description: 'Bootcamps for CSS learning',
         website: 'CssAdvanced.com',
         phone: '(57)6011111',
         average_rating: 4500,
         average_cost: 3,
         user_id: 3
       }
      ], {});
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('bootcamps', null, {});
    
  }
};
