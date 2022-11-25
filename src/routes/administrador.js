const express = require('express');
const administradorController = require("../controllers/administradorControllers")
const router = express.Router();

// middlewares
const adminMiddleware = require('../middlewares/adminMiddleware')
const upload = require("../middlewares/multerAdminMiddleware")


// Create
router.get('/creacion',adminMiddleware ,administradorController.creacion);
router.post('/', upload.single('fotoEvento'), administradorController.creacionPost);

// Update
router.get('/edicion/:id',adminMiddleware , administradorController.edicion);
router.put('/:id', upload.single('fotoEvento'),administradorController.edicionPut);

// Delete
router.delete('/:id', upload.single('fotoEvento'),administradorController.destroy); 
 

module.exports = router;

