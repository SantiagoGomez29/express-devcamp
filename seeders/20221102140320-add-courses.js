'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
      title: 'PHP Bootcamp',
      description: 'Bootcamps for PHP learning',
      weeks: 4,
      enroll_cost: 8500,
      minimum_skill: 'Advanced',
      bootcamp_id: 7
     },

     {
      title: 'Javascript Bootcamp',
      description: 'Bootcamps for Javascript learning',
      weeks: 4,
      enroll_cost: 1200,
      minimum_skill: 'Advanced',
      bootcamp_id: 8
     },

     {
      title: 'CSS Bootcamp',
      description: 'Bootcamps for CSS learning',
      weeks: 4,
      enroll_cost: 3400,
      minimum_skill: 'Advanced',
      bootcamp_id: 8
     },

     {
      title: 'Java Bootcamp',
      description: 'Bootcamps for Java learning',
      weeks: 4,
      enroll_cost: 10500,
      minimum_skill: 'Advanced',
      bootcamp_id: 9
     }

    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('courses', null, {});
  }
};
