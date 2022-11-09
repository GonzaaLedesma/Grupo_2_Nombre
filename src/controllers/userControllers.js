const express = require('express');

const userController = {
    login : (req,res)=>{
        return res.render("users/login")
    },
    register : (req,res)=>{
        return res.render("users/register")
    },
    perfil : (req,res)=>{
        return res.render("users/perfil")
    }
}

module.exports = userController;