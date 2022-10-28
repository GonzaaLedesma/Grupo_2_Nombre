const express = require('express');
const administradorController = require("../controllers/administradorControllers")
const router = express.Router();

// Create
router.get('/creacion', administradorController.creacion);
router.post('/', administradorController.creacionPost);

// Update
router.get('/edicion/:id', administradorController.edicion);
router.put('/:id', administradorController.edicionPut);

// Delete
router.delete('/:id', administradorController.destroy); 

module.exports = router;

