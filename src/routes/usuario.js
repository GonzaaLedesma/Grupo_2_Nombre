const express = require('express');
const userController = require("../controllers/userControllers")
const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');
const router = express.Router();

// multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/Usuarios'));
    },
    filename: (req, file, cb) => {
        const newFilename = 'User-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

// validator 
const validations = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('gustosUsuario').notEmpty().withMessage('Debes seleccionar uno'),
    body('genero').notEmpty().withMessage('Debes seleccionar uno'),
    body('infoUsuario').notEmpty().withMessage('Debes completar este campo'),
	body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('pais').notEmpty().withMessage('Tienes que elegir un país'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]


// rutas
router.get('/login',userController.login)

router.get('/register',userController.register)

router.post('/', upload.single('imagen'), validations, userController.registerProcess)

router.get('/perfil',userController.perfil)


module.exports = router;