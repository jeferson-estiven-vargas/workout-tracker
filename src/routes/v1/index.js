const express = require('express');
const router = express.Router();


//importar rutas especificas
const usersRoutes = require('./users.routes');


//configurar las rutas
router.use('/users', usersRoutes);

module.exports = router;