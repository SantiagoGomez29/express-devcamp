const express = require('express')
const {
    getAllReviews,
    getSingleReview,
    updateReview,
    deleteReview,
    createReviews
 } = require('../controllers/ReviewsController')
 

// Definir objeto de ruteo
const router = express.Router()

//Crear rutas sin parametro
router.route('/')
            .get(getAllReviews)
            .post(createReviews)


//Crear rutas con parametros
router.route('/:id')
            .get(getSingleReview)
            .put(updateReview)
            .delete(deleteReview)


module.exports = router