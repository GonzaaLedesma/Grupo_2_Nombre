const express = require('express');

const productosController = {
    catalogo : (req,res)=>{
        return res.render("catalogo")
    },
    detalles : (req,res)=>{
        return res.render("detalleProducto")
    }
}

module.exports = productosController;