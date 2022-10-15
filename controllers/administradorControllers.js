const express = require('express');

const administradorController = {
    creacion : (req,res)=>{
        return res.render("administrador/creacionProducto");
    },
    edicion : (req,res)=>{
        return res.render("administrador/edicionProducto");
    }
}

module.exports = administradorController;