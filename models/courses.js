'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  courses.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Title debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Title no debe estar vacio'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Description no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'Description debe estar presente'
        }
      }
    },
    weeks:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt:{
          args: true,
          msg: 'Weeks solo recibe números enteros'
        },
        notEmpty: {
          args: true,
          msg: 'Weeks no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'Weeks debe estar presente'
        }
      }
    }, 
    enroll_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate:{
        isFloat:{
          args: true,
          msg: 'Enroll_cost solo recibe números decimales'
        },
        notEmpty: {
          args: true,
          msg: 'Enroll_cost no debe estar vacio'
        },
        notNull: {
          args: true,
          msg: 'Enroll_cost debe estar presente'
        }
      }
    }, 
    minimum_skill:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlpha: {
          args: true,
          msg: 'Minimum_skill solo debe tener letras'
        },
        notNull: {
          args: true,
          msg: 'Minimum_skill debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Minimum_skill no debe estar vacio'
        }
      }
    },
    bootcamp_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          args: true,
          msg: 'El Bootcamp solo tiene que ser un número existente'
        },
        notNull: {
          args: true,
          msg: 'bootcamp_id debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'bootcamp_id no debe estar vacio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'courses',
    timestamps: false
  });
  return courses;
};