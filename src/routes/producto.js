const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// middlewares
const authMiddleware = require("../middlewares/authMiddleware");


router.get('/detalles/:id', productosController.detalles);
router.get('/catalogo', productosController.catalogo);
router.get('/carrito',authMiddleware ,productosController.carrito);
router.get('/ayuda', productosController.ayuda);

module.exports = router;












