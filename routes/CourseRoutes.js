const express = require('express')
const {
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse
 } = require('../controllers/CoursesController')
 

// Definir objeto de ruteo
const router = express.Router()

//Crear rutas sin parametro
router.route('/')
            .get(getAllCourses)
            .post(createCourse)


//Crear rutas con parametros
router.route('/:id')
            .get(getSingleCourse)
            .put(updateCourse)
            .delete(deleteCourse)


module.exports = router