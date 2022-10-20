const express = require('express');
const administradorController = require("../controllers/administradorControllers")
const router = express.Router();

router.get('/creacion', administradorController.creacion);
router.get('/edicion', administradorController.edicion);

module.exports = router;