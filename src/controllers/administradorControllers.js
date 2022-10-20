const express = require('express');

const administradorController = {
    creacion : (req,res)=>{
        return res.render("products/creacionProducto");
    },
    edicion : (req,res)=>{
        return res.render("products/edicionProducto");
    }
}

module.exports = administradorController;