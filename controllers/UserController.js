//Dependencias:
//El objeto de conexion
const sequelize = require('../config/seq')
//DataTypes de sequelize
const { DataTypes }= require('sequelize')
//El Modelo
const UserModel = require('../models/user')

//Crear la entidad:
const User = UserModel(sequelize, DataTypes)


// Listar todos los Users
exports.getAllUser = async (req, res) => {
    //Traer los usuarios
    const users = await User.findAll();
    //Response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

// Listar Users por id
exports.getSingleUser = async (req, res) => {
    //Traer los usuarios por id
    const singleUser = await User.findByPk(req.params.id);
    //Response con los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

// Actualizar Users por id
exports.updateUser = async (req, res) => {
    //Actualizar los datos
    await User.update( req.body, {
        where:{
            id: req.params.id
        }
    }); 
    const singleUser = await User.findByPk(req.params.id);
    //Response con la actualización de los datos
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

// Eliminar Users por id
exports.deleteUser = async (req, res) => {
    //Eliminar un Usuario
    const singleUser = await User.findByPk(req.params.id);
     await User.destroy({
        where:{
            id: req.params.id
        }
    });
    //Response con el dato eliminado
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

// Crear nuevo Users
exports.createUser = async (req, res) => {
    //Crear nuevos usuarios
     const newUser = await User.create(req.body)
     //Response 
        res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
}
