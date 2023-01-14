const path = require("path");
const { body } = require("express-validator");

const validacionCreacion = [
  body("nombre_evento")
    .notEmpty()
    .withMessage("Tienes que escribir un nombre para el evento")
    .isLength({ min: 5 })
    .withMessage("El nombre debe contar con mas de 5 caracteres"),
  body("fecha")
    .notEmpty()
    .withMessage("Tienes que escribir una fecha para el evento"),
  body("ubicacion")
    .notEmpty()
    .withMessage("Tienes que escribir una ubicación para el evento"),
  body("sede")
    .notEmpty()
    .withMessage("Tienes que escribir el nombre de la sede para el evento"),
  body("participacion")
    .notEmpty()
    .withMessage("Tienes que escribir otros participantes para el evento"),
  body("capacidad_sede")
    .notEmpty()
    .withMessage("Tienes que indicar la capacidad de la sede para el evento"),
  body("precio")
    .notEmpty()
    .withMessage("Tienes que indicar un precio para el evento"),
  body("horario")
    .notEmpty()
    .withMessage("Tienes que indicar un horario para el evento")
    .isLength({ max: 10 })
    .withMessage("Horario invalido maximo 10 caracteres"),
  body("id_categoria")
    .notEmpty()
    .withMessage("Tienes que indicar una categoria para el evento"),
    body("evento_id")
    .notEmpty()
    .withMessage("Tienes que indicar el/los genero/s del evento"),
  body("descripcion")
    .isLength({ min: 20 })
    .withMessage("La descripción debe contar con al menos de 20 caracteres"),
  body("biografia")
    .isLength({ min: 20 })
    .withMessage("La biografía debe contar con al menos de 20 caracteres"),
  body("foto_evento").custom((value, { req }) => {
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

module.exports = validacionCreacion;