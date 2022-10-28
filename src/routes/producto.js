const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/detalles/:id', productosController.detalles);
router.get('/catalogo', productosController.catalogo);
router.get('/carrito', productosController.carrito);

module.exports = router;












