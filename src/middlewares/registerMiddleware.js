const path = require('path');
const { body } = require('express-validator');

const validator = [
	body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),
	body('nombre_usuario').notEmpty().withMessage('Tienes que escribir un nombre de usuario'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('genero_id_favorito').notEmpty().withMessage('Debes seleccionar un gusto favorito'),
    body('genero_id').notEmpty().withMessage('Debes seleccionar minimo uno'),
    body('genero').notEmpty().withMessage('Debes seleccionar uno'),
    body('descripcion').notEmpty().withMessage('Debes completar este campo'),
	body('contrasenia').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('pais').notEmpty().withMessage('Tienes que elegir un país'),
	body('foto_perfil').custom((value, { req }) => {
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