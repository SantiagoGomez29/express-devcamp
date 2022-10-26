const sequelize = require('./seq')
const colors = require('colors')
const { DataTypes } = require('sequelize')

//Creamos una instancia del modelo Users
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes)

//Definimos una función de conexión para conectarnos a la base de datos:

const connectDB = async ()=>{
    try {
        //Conectar a la base de datos
        await sequelize.authenticate()
        console.log('Conexión Exitosa :D'.bgGreen)
        const jane = await User.create(
            { username: "Samuel", 
              email: "Samuel12@misena.edu.co", 
              password: "12345" 
            });
        console.log("Jane's auto-generated ID:", jane.id);

    } catch (error) {
        console.log(error)
    }
}

connectDB()