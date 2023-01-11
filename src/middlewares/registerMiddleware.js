const path = require("path");
const { body } = require("express-validator");

const validacionProducto = [
  body("nombre")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre")
    .isLength({ min: 2 })
    .withMessage("El nombre debe contar con mas de 2 caracteres"),
  body("apellido")
    .notEmpty()
    .withMessage("Tienes que escribir un apellido")
    .isLength({ min: 2 })
    .withMessage("El apellido debe contar con mas de 2 caracteres"),
  body("nombre_usuario")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre de usuario")
    .isLength({ max: 14 })
    .withMessage(
      "El nombre de usuario debe contar como maximo con 14 caracteres"
    ),
  body("email")
    .notEmpty()
    .withMessage("Tienes que escribir un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("Debes escribir un formato de correo válido"),
  body("genero_id_favorito")
    .notEmpty()
    .withMessage("Debes seleccionar un gusto favorito"),
  body("genero_id").notEmpty().withMessage("Debes seleccionar minimo uno"),
  body("genero").notEmpty().withMessage("Debes seleccionar uno"),
  body("descripcion").notEmpty().withMessage("Debes completar este campo"),
  body("contrasenia")
    .notEmpty()
    .withMessage("Tienes que escribir una contraseña")
    .isLength({ min: 8 })
    .withMessage("La contrasenia debe contar con un minimo 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )
    .withMessage(
      "La contraseña deberá tener letras mayúsculas, minúsculas, un número y un carácter especial."
    ),
  body("pais").notEmpty().withMessage("Tienes que elegir un país"),
  body("foto_perfil").custom((value, { req }) => {
    let file = req.file;
    let acceptedExtensions = [".jpeg", ".jpg", ".png", ".gif", ".webp"];

    if (!file) {
      throw new Error("Tienes que subir una imagen");
    } else {
      let fileExtension = path.extname(file.originalname);
      if (!acceptedExtensions.includes(fileExtension)) {
        throw new Error(
          `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
            ", "
          )}`
        );
      }
    }

    return true;
  }),
];

module.exports = validacionProducto;
