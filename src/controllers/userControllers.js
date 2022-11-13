const express = require('express');
const { validationResult } = require('express-validator');


const userController = {
    login : (req,res)=>{
        return res.render("users/login")
    },
    register : (req,res)=>{
        return res.render("users/register")
    },
    registerProcess:(req, res)=>{
		const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
			res.render('./users/register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        return res.send("Tas registrado")
        // return res.send(resultValidation.errors)
    },
    perfil : (req,res)=>{
        return res.render("users/perfil")
    }
}

module.exports = userController;