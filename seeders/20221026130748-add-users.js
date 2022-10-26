'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
      await queryInterface.bulkInsert('users', [
        {
        username: 'Santiago Gomez',
        email: 'sgomez1770@misena.edu.co',
        password: '12345678'
        },

        {
          username: 'Fernando Jimenez',
          email: 'Fnandomenez@misena.edu.co',
          password: '12345'
        },

        {
          username:  'Maria Gomez',
          email: 'Mgomez70@misena.edu.co',
          password: '246810'
        }
      
      
      ], {});
  },

  async down (queryInterface, Sequelize) {

      await queryInterface.bulkDelete('users', null, {});
  }
};
