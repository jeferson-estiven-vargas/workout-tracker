const express = require('express');
const router = express.Router();

//IMPORTACION versiones de rutas
const v1Routes = require('./v1');

//configurar rutas versionadas
router.use('/v1', v1Routes);

module.exports = router