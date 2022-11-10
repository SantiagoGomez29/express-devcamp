//Dependencias:
//El objeto de conexion
const sequelize = require('../config/seq')
//DataTypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El Modelo
const CoursesModel = require('../models/courses')

//Crear la entidad:
const Courses = CoursesModel(sequelize, DataTypes)


// Listar todos los Cursos
exports.getAllCourses = async (req, res) => {

    try {
        //Traer los usuarios
        const AllCourses = await Courses.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": AllCourses
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

// Listar Courses por id
exports.getSingleCourse = async (req, res) => {

    try {
        //Traer los Cursos por id
        const singleCourse = await Courses.findByPk(req.params.id);
        if (singleCourse) {
            //Response con los datos
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleCourse
                })
        } else {
            res
                .status(200)
                .json({
                    "success": true,
                    "error": "Curso no existente"
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

// Actualizar Curso por id
exports.updateCourse = async (req, res) => {
    try {
        const singleCourse = await Courses.findByPk(req.params.id);
        if (!singleCourse) {
            res
                .status(400)
                .json({
                    "success": true,
                    "error": "Curso no existente"
                })
        } else {
            //Actualizar los datos
            await Courses.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //Selecciono usuario actualizado
            const updatedCourse = await Courses.findByPk(req.params.id);
            //Response con la actualización de los datos
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updatedCourse
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

// Eliminar Curso por id
exports.deleteCourse = async (req, res) => {

    try {
        //Eliminar un Curso
        const singleCourse = await Courses.findByPk(req.params.id);
        if(!singleCourse){
            res
            .status(200)
            .json({
                "success": true,
                "data": "Curso no existente"
            })
        }else{
            await Courses.destroy({
                where: {
                    id: req.params.id
                }
            })
             //Response con la actualización de los datos
             res
             .status(200)
             .json({
                 "success": true,
                 "data": singleCourse
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
exports.createCourse = async (req, res) => {
    try {
        //Crear nuevos usuarios
        const newCourse = await Courses.create(req.body)
        //Response 
        res
            .status(200)
            .json({
                "success": true,
                "data": newCourse
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
