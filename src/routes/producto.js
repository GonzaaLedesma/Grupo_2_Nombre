const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// middlewares
const authMiddleware = require("../middlewares/authMiddleware");


router.get('/detalles/:id', productosController.detalles);
router.get('/catalogo', productosController.catalogo);
router.get('/carrito',authMiddleware ,productosController.carrito);
router.post('/carrito/:id',authMiddleware,productosController.carritoAdd);
router.delete('/carrito/:id',authMiddleware,productosController.carritoDelete);
router.put('/carrito/:id',authMiddleware,productosController.carritoUpdate);
router.get('/ayuda', productosController.ayuda);
router.post('/busqueda', productosController.busqueda);

module.exports = router;












