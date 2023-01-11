const express = require('express');
const administradorController = require("../controllers/administradorControllers")
const router = express.Router();

// middlewares

const authMiddleware = require("../middlewares/authMiddleware");
const adminMiddleware = require('../middlewares/adminMiddleware')
const upload = require("../middlewares/multerAdminMiddleware")
const validacionProducto = require("../middlewares/productMiddleware");
const validacionEdicion = require("../middlewares/edicionProductMiddleware");



// Create
router.get('/creacion', authMiddleware, adminMiddleware ,administradorController.creacion);
router.post('/', authMiddleware, upload.single('foto_evento'), validacionProducto, administradorController.creacionPost);

// Update
router.get('/edicion/:id', authMiddleware, adminMiddleware , administradorController.edicion);
router.put('/:id', authMiddleware, upload.single('foto_evento'), validacionEdicion, administradorController.edicionPut);

// Delete
router.delete('/:id', authMiddleware, upload.single('foto_evento'),administradorController.destroy); 
 

module.exports = router;

