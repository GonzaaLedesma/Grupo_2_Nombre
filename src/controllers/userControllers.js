const db = require("../database/models");
const sequelize = db.sequelize;
const bcryptjs = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/users.json");
const userList = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

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
    const imagen = req.file;
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
        email: req.body.email
      }
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
    return res.render("users/perfil", {
      usuarioLogeado: req.session.logged,
      titlePage: "- Perfil",
    });
  },
  perfilEdicion: (req, res) => {
    return res.render("users/edicionPerfil", {
      datosUsuario: req.session.logged,
      titlePage: "- Edicion Perfil",
    });
  },
  perfilPut: (req, res) => {
    const imagen = req.file;
    const {
      nombre,
      nombreUsuario,
      email,
      pais,
      gustosUsuario,
      genero,
      infoUsuario,
    } = req.body;
    let newUser = {};
    userList.forEach((userFound) => {
      if (userFound.email == email) {
        (userFound.nombre = nombre),
          (userFound.nombreUsuario = nombreUsuario),
          (userFound.email = email),
          (userFound.pais = pais),
          (userFound.gustosUsuario = gustosUsuario),
          (userFound.genero = genero),
          (userFound.infoUsuario = infoUsuario);
        userFound.imagen = imagen.filename;
        newUser = userFound;
      }
    });
    fs.writeFileSync(usersFilePath, JSON.stringify(userList, null, " "));

    req.session.logged = newUser;

    res.render("./users/login", {
      usuarioLogeado: req.session.logged,
      titlePage: "- Login",
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
