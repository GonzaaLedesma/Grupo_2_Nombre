const db = require("../database/models");
const sequelize = db.sequelize;
const bcryptjs = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const userController = {
  register: (req, res) => {
    return res.render("users/register", { titlePage: "- Register" });
  },
  registerProcess: async (req, res) => {
    const errors = validationResult(req);

    if (errors.errors.length > 0) {
      return res.render("./users/register", {
        errors: errors.mapped(),
        oldData: req.body,
      });
    }

    const user = await db.Usuario.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }
    const {
      nombre,
      apellido,
      nombreUsuario,
      contrasenia,
      email,
      pais,
      gustoFavorito,
      gustosUsuario,
      genero,
      infoUsuario,
    } = req.body;
    const imagen = req.file;

    await db.Usuario.create({
      nombre: nombre,
      apellido: apellido,
      nombre_usuario: nombreUsuario,
      contrasenia: bcryptjs.hashSync(contrasenia, 10),
      email: email,
      pais: pais,
      genero_id_favorito: gustoFavorito,
      generos: gustosUsuario,
      genero: genero,
      descripcion: infoUsuario,
      tipoUsuario: false,
      foto_perfil: imagen.filename,
    });

    return res.redirect("login");
  },
  login: (req, res) => {
    return res.render("users/login", { titlePage: "- Login" });
  },
  loginProcess: async (req, res) => {
    let loginUser = await db.Usuario.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (loginUser && loginUser.contrasenia) {
      let passwordCompare = bcryptjs.compareSync(
        req.body.contrasenia,
        loginUser.contrasenia
      );
      if (passwordCompare) {
        delete loginUser.contrasenia;
        req.session.logged = loginUser;

        if (req.body.recuerdame) {
          res.cookie("datosEmail", req.body.email, { maxAge: 1000 * 60 * 15 });
        }
        return res.redirect("perfil");
      }
      return res.render("users/login", {
        errors: {
          email: {
            msg: "Las credenciales son inválidas",
          },
        },
      });
    }
    return res.render("users/login", {
      errors: {
        email: {
          msg: "No se encuentra este email en nuestra base de datos",
        },
      },
    });
  },
  perfil: (req, res) => {
    console.log(req.session);
    return res.render("users/perfil", {
      usuarioLogeado: req.session.logged,
      titlePage: "- Perfil",
    });
  },
  perfilEdicion: async (req, res) => {
    return res.render("users/edicionPerfil", {
      datosUsuario: req.session.logged,
      titlePage: "- Edicion Perfil",
    });
  },
  perfilPut: (req, res) => {
    const {
      nombre,
      apellido,
      nombreUsuario,
      pais,
      email,
      gustoFavorito,
      gustosUsuario,
      genero,
      infoUsuario,
    } = req.body;
    const imagen = req.file;

     db.Usuario.update({
      nombre: nombre,
      apellido: apellido,
      nombre_usuario: nombreUsuario,
      email: email,
      genero_id_favorito: gustoFavorito,
      genero: genero,
      pais: pais,
      descripcion: infoUsuario,
      foto_perfil: imagen.filename,
      generos: gustosUsuario,
      tipoUsuario: false,
    },
    {
      where: {
          id : req.session.id    
        }
  })
  .then((evento) => {
    res.redirect("../perfil");
  })
  .catch((err) => {
    res.send(err);
  });
  },
  logout: (req, res) => {
    res.clearCookie("datosEmail");
    req.session.destroy();
    return res.redirect("/");
  },

  terminos: (req, res) => {
    return res.render("users/terminosYCondiciones", {
      titlePage: "- Terminos",
    });
  },
};

module.exports = userController;
