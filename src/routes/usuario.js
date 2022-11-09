const express = require('express');
const userController = require("../controllers/userControllers")
const router = express.Router();

router.get('/login',userController.login)
router.get('/register',userController.register)
router.get('/perfil',userController.perfil)


module.exports = router;