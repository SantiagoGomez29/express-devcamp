const sequelize = require('./seq')
const colors = require('colors')


//Definimos una función de conexión para conectarnos a la base de datos:

const connectDB = async ()=>{
    try {
        //Conectar a la base de datos
        await sequelize.authenticate()
        console.log('Conexión Exitosa :D'.bgGreen)
        

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB