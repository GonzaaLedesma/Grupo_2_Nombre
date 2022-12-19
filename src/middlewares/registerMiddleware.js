const path = require('path');
const { body } = require('express-validator');

const validator = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('nombreUsuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('gustoFavorito').notEmpty().withMessage('Debes seleccionar un gusto favorito'),
    body('gustosUsuario').notEmpty().withMessage('Debes seleccionar minimo uno'),
    body('genero').notEmpty().withMessage('Debes seleccionar uno'),
    body('infoUsuario').notEmpty().withMessage('Debes completar este campo'),
	body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('pais').notEmpty().withMessage('Tienes que elegir un país'),
	body('imagen').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', '.webp'];
		
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

module.exports = validator;