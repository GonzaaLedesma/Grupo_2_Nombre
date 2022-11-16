const express = require("express");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const usuario = require("../models/Users");

const userController = {
  register: (req, res) => {
    return res.render("users/register");
  },
  registerProcess: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      res.render("./users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    let buscarUsuario = usuario.findField("email", req.body.email);

    if (buscarUsuario) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya está registrado",
          },
        },
        oldData: req.body,
      });
    }

    let usarioCreado = {
      ...req.body,
      contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
      imagen: req.file.filename,
    };

    let userCreated = usuario.create(usarioCreado);

    return res.redirect("login");
  },
  login: (req, res) => {
    return res.render("users/login");
  },
  loginProcess: (req, res) => {
    let login = usuario.findField("email", req.body.email);

    if(login) {
        let passwordCompare = bcryptjs.compareSync(req.body.contrasenia, login.contrasenia);
        if (passwordCompare) {
            delete login.contrasenia;
            req.session.logged = login;

            if(req.body.remember) {
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
            }

            return res.redirect("perfil");
        } 
        return res.render('users/login', {
            errors: {
                email: {
                    msg: 'Las credenciales son inválidas'
                }
            }
        });
    }

    return res.render('users/login', {
        errors: {
            email: {
                msg: 'No se encuentra este email en nuestra base de datos'
            }
        }
    });
    
  },
  perfil: (req, res) => {
    return res.render("users/perfil");
  },
};

module.exports = userController;
