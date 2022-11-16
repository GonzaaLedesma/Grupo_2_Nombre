const express = require('express');
const path = require('path');
const router = express.Router();

const userController = require("../controllers/userControllers")


// middlewares
const validator = require("../middlewares/registerMiddleware")
const upload = require("../middlewares/multerMiddleware")


// rutas
router.get('/login',userController.login)

router.post('/login',userController.loginProcess)

router.get('/register',userController.register)

router.post('/register', upload.single('imagen'), validator, userController.registerProcess)

router.get('/perfil',userController.perfil)


module.exports = router;