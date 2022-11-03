'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          unique(value){
              return User.findOne({where:{username:value}})
              .then((username)=> {
                if(username){
                  throw new Error('Username debe ser un dato único')
                }
              })
          },
          isAlpha: {
              args: true,
              msg: 'Usermane solo debe tener letras' 
          },
          notNull: {
            args: true,
            msg: 'Usermane debe estar presente'
          },
          notEmpty: {
            args: true,
              msg: 'Usermane no debe estar vacio'
          }
        
        }
    }, 
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg: "Email no valido"
        }
      }
    },

    password:{
      type: DataTypes.STRING,
      validate:{
        len: {
          args: [5,10],
          msg: "Passqord min 5 y max 10 caracteres"
        }
      }
    } 
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};