const express = require('express');
const path = require('path');
const router = express.Router();

const userController = require("../controllers/userControllers");


// middlewares
const userMiddleware = require("../middlewares/userMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validator = require("../middlewares/registerMiddleware");
const upload = require("../middlewares/multerMiddleware");


// rutas
router.get('/login',userMiddleware ,userController.login);

router.post('/login',userController.loginProcess);

router.get('/register', userMiddleware, userController.register);

router.post('/register', upload.single('imagen'), validator, userController.registerProcess);

router.get('/perfil' ,authMiddleware ,userController.perfil);

router.get('/cerrarSesion', userController.logout);

module.exports = router;