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
      nombre_usuario,
      contrasenia,
      email,
      pais,
      genero_id_favorito,
      genero_id,
      genero,
      descripcion,
    } = req.body;
    const foto_perfil = req.file;

    const data = await db.Usuario.create({
      nombre: nombre,
      apellido: apellido,
      nombre_usuario: nombre_usuario,
      contrasenia: bcryptjs.hashSync(contrasenia, 10),
      email: email,
      pais: pais,
      genero_id_favorito: genero_id_favorito,
      genero: genero,
      descripcion: descripcion,
      foto_perfil: foto_perfil.filename,
    });
    genero_id.forEach(async (genero) => {
      await db.Usuario_Genero.create({
        usuario_id: data.dataValues.id,
        genero_id: genero,
      });
    });
    await db.Tipo_Usuario.create({
      usuario_id: data.dataValues.id,
      admin: false,
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
    let tipoUsuario = await db.Tipo_Usuario.findOne({
      where: {
        usuario_id: loginUser.id,
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
        req.session.loggedAdmin = tipoUsuario;

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
  perfilPut: async (req, res) => {
    const {
      nombre,
      apellido,
      nombre_usuario,
      pais,
      genero_id_favorito,
      genero,
      descripcion,
    } = req.body;
    const foto_perfil = req.file;
    const data = await db.Usuario.update(
      {
        nombre: nombre,
        apellido: apellido,
        nombre_usuario: nombre_usuario,
        genero_id_favorito: genero_id_favorito,
        genero: genero,
        pais: pais,
        descripcion: descripcion,
        foto_perfil: foto_perfil.filename,
      },
      {
        where: {
          id: res.locals.logged.id,
        },
      }
    );

    res.redirect("../perfil");
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
