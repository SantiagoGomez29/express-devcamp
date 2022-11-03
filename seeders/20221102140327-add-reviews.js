'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', [{
      title: 'PHP Bootcamp',
      text: 'Bootcamps for PHP learning',
      rating: 4,
      bootcamp_id: 4,
      user_id: 4
     },

     {
      title: 'CSS Bootcamp',
      text: 'Bootcamps for CSS learning',
      rating: 8,
      bootcamp_id: 5,
      user_id: 5
     },

     {
      title: 'JAVA Bootcamp',
      text: 'Bootcamps for JAVA learning',
      rating: 6,
      bootcamp_id: 6,
      user_id: 6
     },

     {
      title: 'PYTHON Bootcamp',
      text: 'Bootcamps for PYTHON learning',
      rating: 7,
      bootcamp_id: 4,
      user_id: 4
     }

    ], {});
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('reviews', null, {});
     
  }
};