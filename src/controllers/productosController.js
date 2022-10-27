const express = require('express');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productosController = {
    catalogo : (req,res)=>{
        return res.render("products/catalogo", {products});
    },
    detalles : (req,res)=>{
        return res.render("products/detalleProducto");
    },
    carrito : (req,res)=>{
        return res.render("products/carrito");
    }
}

module.exports = productosController;