const express = require('express');
const router = express.Router();
const apiController = require("../controllers/apiController")


router.get('/productos', apiController.products)
router.get('/productos/:id', apiController.oneProduct)

router.get('/usuarios', apiController.users)
router.get('/usuarios/:id', apiController.oneUser)

router.get('/carrito', apiController.dataCart)

module.exports = router;