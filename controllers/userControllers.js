const express = require('express');

const userController = {
    login : (req,res)=>{
        return res.render("register")
    },
    register : (req,res)=>{
        return res.render("login")
    }
}

module.exports = userController;