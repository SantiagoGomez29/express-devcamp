// 1. Crear el objeto express
const express = require('express')

// 2. Citar las dependencias necesarias
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const listEndpoint = require('express-list-endpoints')
const { json } = require('express/lib/response')
const { request } = require('express')

// Los componentes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/CourseRoutes')
const reviewRoutes = require('./routes/ReviewRoutes')
const userRoutes = require('./routes/UserRoutes')

// 3. Establecer archivo de configuración
dotenv.config({
    path: './config/config.env'
})
//console.log(process.env.PORT)

// 4. Crear el objeto aplication para el servidor de desarrollo
const app = express()

//Validar el objeto applicacion para recibir datos en formato JSON
app.use(express.json())

//Conexión a la base de datos
connectDB()

// Rutas de proyecto
app.use('/api/v1/bootcamps', bootcampRoutes)
app.use('/api/v1/courses', courseRoutes)
app.use('/api/v1/reviews', reviewRoutes)
app.use('/api/v1/users', userRoutes)


// Endpoints de dominio
// Endpoint bootcamp
// Listar todos los bootcamps
app.get('/api/v1/bootcamps', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí van a salir todos los bootcamps"
        })
})

// Listar bootcamp por id
app.get('/api/v1/bootcamps/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a salir el bootcamp cuyo id es ${req.params.id}`
        })
})

// Actualizar bootcamp por id
app.put('/api/v1/bootcamps/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a actualizarse el bootcamp cuyo id es ${req.params.id}`
        })
})

// Eliminar bootcamp por id
app.delete('/api/v1/bootcamps/:id', (req, res) => {
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aquí va a eliminarse el bootcamp cuyo id es ${req.params.id}`
        })
})

// Crear nuevo bootcamp
app.post('/api/v1/bootcamps', (req, res) => {
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aquí vamos a registrar bootcamp"
        })
})

// Imprimir la lista de endpoints válidas en elproyecto
console.log(listEndpoint(app))

// Ejecutar el servidor de desarrollo
// Parámetros:
// Puerto de escucha - listen 
app.listen(process.env.PORT, () => {
    console.log(`Servidor activo en puerto 5000`.bgWhite.blue)
})