'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Crear la columna 'user_id' Fk con courses
    //addColumn: Parametros
    // 1. En la tabla en la cual poner la columna 
    //2. Nombre de la nueva columna
    //3. Opciones de la nueva columna
    await queryInterface.addColumn('reviews',
                                   'bootcamp_id', 
                                   {
                                    type: Sequelize.INTEGER,
                                    references: {
                                      model: 'bootcamps',
                                      key: 'id'
                                    },
                                    onUpdate: 'CASCADE',
                                    onDelete: 'SET NULL'
                                    })
  },

  async down (queryInterface, Sequelize) {
     //Metodo RevomeColum
    // removecolumn; Parametro
    //1. La tabla de donde vas a remover
    //2. La columna a eliminar
    await queryInterface.removeColumn('reviews', 'bootcamp_id')
  }
};
