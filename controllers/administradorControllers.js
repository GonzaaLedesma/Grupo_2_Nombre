const express = require('express');

const administradorController = {
    creacion : (req,res)=>{
        return res.render("creacionProducto");
    },
    edicion : (req,res)=>{
        return res.render("edicionProducto");
    }
}

module.exports = administradorController;