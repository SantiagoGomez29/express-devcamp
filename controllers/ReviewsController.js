//Dependencias:
//El objeto de conexion
const sequelize = require('../config/seq')
//DataTypes de sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El Modelo
const ReviewsModel = require('../models/reviews')

//Crear la entidad:
const Reviews = ReviewsModel(sequelize, DataTypes)


// Listar todos los Reviews
exports.getAllReviews = async (req, res) => {

    try {
        //Traer los Reviews
        const AllReviews = await Reviews.findAll();
        //Response con los datos
        res
            .status(200)
            .json({
                "success": true,
                "data": AllReviews
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

// Listar Reviews por id
exports.getSingleReview = async (req, res) => {

    try {
        //Traer los Reviews por id
        const singleReview = await Reviews.findByPk(req.params.id);
        if (singleReview) {
            //Response con los datos
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleReview
                })
        } else {
            res
                .status(200)
                .json({
                    "success": true,
                    "error": "Review no existente"
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
exports.updateReview = async (req, res) => {
    try {
        const singleReview = await Reviews.findByPk(req.params.id);
        if (!singleReview) {
            res
                .status(400)
                .json({
                    "success": true,
                    "error": "Review no existente"
                })
        } else {
            //Actualizar los datos
            await Reviews.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            //Selecciono usuario actualizado
            const updatedReview = await Reviews.findByPk(req.params.id);
            //Response con la actualización de los datos
            res
                .status(200)
                .json({
                    "success": true,
                    "data": updatedReview
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

// Eliminar Review por id
exports.deleteReview = async (req, res) => {

    try {
        //Eliminar un Review
        const singleReview = await Reviews.findByPk(req.params.id);
        if(!singleReview){
            res
            .status(200)
            .json({
                "success": true,
                "data": "Review no existente"
            })
        }else{
            await Reviews.destroy({
                where: {
                    id: req.params.id
                }
            })
             //Response con la actualización de los datos
             res
             .status(200)
             .json({
                 "success": true,
                 "data": singleReview
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

// Crear nuevo Reviews
exports.createReviews = async (req, res) => {
    try {
        //Crear nuevos reviews
        const newReview = await Reviews.create(req.body)
        //Response 
        res
            .status(200)
            .json({
                "success": true,
                "data": newReview
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
