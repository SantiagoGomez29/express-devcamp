const express = require('express')
const {
    getAllUser,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
 } = require('../controllers/UserController')
 

// Definir objeto de ruteo
const router = express.Router()

//Crear rutas sin parametro
router.route('/')
            .get(getAllUser)
            .post(createUser)


//Crear rutas con parametros
router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)


module.exports = router