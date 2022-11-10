'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  reviews.init({
    title:{
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
    text:{
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: 'Text debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Text no debe estar vacio'
        }
      }
    },
    rating:{
      type: DataTypes.FLOAT,
      allowNull: false,
      validate:{
        isNumeric:{
          args: true,
          msg: 'Rating solo recibe valores númericos'
        },
        notNull: {
          args: true,
          msg: 'Rating debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'Rating no debe estar vacio'
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
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isNumeric:{
          args: true,
          msg: 'El user solo tiene que ser un número existente'
        },
        notNull: {
          args: true,
          msg: 'user_id debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'user_id no debe estar vacio'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'reviews',
    timestamps: false
  });
  return reviews;
};