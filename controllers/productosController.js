const express = require('express');

const productosController = {
    catalogo : (req,res)=>{
        return res.render("products/catalogo")
    },
    detalles : (req,res)=>{
        return res.render("products/detalleProducto")
    }
}

module.exports = productosController;