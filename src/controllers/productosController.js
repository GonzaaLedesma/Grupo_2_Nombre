const express = require('express');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productosController = {
    catalogo : (req,res)=>{
        return res.render("products/catalogo", {products, titlePage:"- Catalogo"});
    },
    detalles : (req,res)=>{
        let detalle = products.find(products=> products.id == req.params.id)
        res.render('products/detalleProducto',{detalle, titlePage:"- Detalles"})
    },
    carrito : (req,res)=>{
        return res.render("products/carrito",{titlePage:"- Carrito"});
    },
    ayuda : (req,res)=>{
        return res.render("products/ayuda", {titlePage:"- Ayuda"});
    },
    busqueda: async (req, res) => {
        const data = req.body.busqueda.trim(); // elimina espacios en blanco del principio y final de la cadena de búsqueda
        if (!data) {
          const dataArray = [];
          return res.render("products/busqueda", {
            dataArray,
            data,
            titlePage: "- Resultados",
          });
        }
        const filteredProducts = products.filter((product) => {
          const name = product.nombre.toLowerCase(); // asegúrate de que la propiedad 'nombre' del objeto tenga letras minúsculas para que la búsqueda no sea sensible a mayúsculas y minúsculas
          return name.includes(data.toLowerCase());
        });
        
        return res.render("products/busqueda", {
          dataArray: filteredProducts,
          data,
          titlePage: "- Resultados",
        });
      }
      
}

module.exports = productosController;