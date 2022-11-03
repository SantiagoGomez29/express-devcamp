//Dependencias:
//El objeto de conexion
const sequelize = require('../config/seq')
//DataTypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El Modelo
const UserModel = require('../models/user')

//Crear la entidad:
const User = UserModel(sequelize, DataTypes)


// Listar todos los Users
exports.getAllUser = async (req, res) => {

    try {
        //Traer los usuarios
        const users = await User.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": users
            })

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "error": "Error de Servidor"
            })
    }

}

// Listar Users por id
exports.getSingleUser = async (req, res) => {

    try {
        //Traer los usuarios por id
        const singleUser = await User.findByPk(req.params.id);
        if (singleUser) {
            //Response con los datos
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        } else {
            res
                .status(200)
                .json({
                    "success": true,
                    "error": "Usuario no exitente"
                })
        }

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "error": "Error de Servidor"
            })
    }

}

// Actualizar Users por id
exports.updateUser = async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            res
                .status(400)
                .json({
                    "success": true,
                    "error": "Usuario no existente"
                })
        } else {
            //Actualizar los datos
            await User.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //Selecciono usuario actualizado
            const updatedUser = await User.findByPk(req.params.id);
            //Response con la actualización de los datos
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updatedUser
                })
        }

    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "error": "Error de Servidor"
            })
    }

}

// Eliminar Users por id
exports.deleteUser = async (req, res) => {

    try {
        //Eliminar un Usuario
        const singleUser = await User.findByPk(req.params.id);
        if(!singleUser){
            res
            .status(200)
            .json({
                "success": true,
                "data": "Usuario no existente"
            })
        }else{
            await User.destroy({
                where: {
                    id: req.params.id
                }
            })
             //Response con la actualización de los datos
             res
             .status(200)
             .json({
                 "success": true,
                 "data": singleUser
             })
        }

    } catch (error) {
         //Response con el dato eliminado
         res
         .status(200)
         .json({
             "success": true,
             "data": "Error de Servidor"
         })
    }
   
}

// Crear nuevo Users
exports.createUser = async (req, res) => {
    try {
        //Crear nuevos usuarios
        const newUser = await User.create(req.body)
        //Response 
        res
            .status(200)
            .json({
                "success": true,
                "data": newUser
            })

    } catch (error) {
        if (error instanceof ValidationError) {
            //Recorramos el arreglo de errores
            //Map
            const errores = error.errors.map((elemento) => elemento.message)
            res
                .status(400)
                .json({
                    "success": false,
                    "error": errores
                })
        } else {
            res
                .status(400)
                .json({
                    "success": false,
                    "error": "Error de Servidor"
                })
        }
    }

}
