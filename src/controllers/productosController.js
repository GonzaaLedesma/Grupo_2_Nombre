const express = require('express');
// let actuales =
const productosController = {
    catalogo : (req,res)=>{
        return res.render("products/catalogo");
    },
    detalles : (req,res)=>{
        return res.render("products/detalleProducto");
    },
    carrito : (req,res)=>{
        return res.render("products/carrito");
    }
}

module.exports = productosController;