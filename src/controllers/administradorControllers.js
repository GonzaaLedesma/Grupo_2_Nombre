const express = require('express');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const administradorController = {
    creacion : (req,res)=>{
         res.render("products/creacionProducto", {titlePage:"- Creacion"});
    },
    edicion : (req,res)=>{
        const productsId = req.params.id;
        let editarProducto = products.filter((product)=> product.id == productsId )

         res.render("products/edicionProducto", {editarProducto:editarProducto[0], titlePage:"- Edicion"});
    },
    creacionPost : (req,res)=>{
        const fotoEvento = req.file;
        const {nombre,dia,ubicacion,sede,participacion,capacidad,price,horario,categoria,generoBanda,descripcion,biografia} = req.body
        let  newProduct = {
            id : Date.now(),
            nombre : nombre,
            dia : dia,
            ubicacion : ubicacion,
            sede : sede,
            participacion : participacion,
            capacidad : Number(capacidad),
            price : Number(price),
            horario : Number(horario),
            categoria : categoria,
            generoBanda: generoBanda,
            descripcion : descripcion,
            biografia : biografia,
            fotoEvento : fotoEvento.filename
        } 
        
        products.push(newProduct);
        
        fs.writeFileSync(productsFilePath,JSON.stringify(products, null, ' '));
        
        res.render('./products/catalogo', {products}); 
        // res.redirect('products/catalogo'); 
   },
    edicionPut : (req,res)=>{
        const productsId = req.params.id;
        const fotoEvento = req.file;
        const {nombre,dia,ubicacion,sede,participacion,capacidad,price,horario,categoria,generoBanda,descripcion,biografia} = req.body;
        products.forEach((products)=>{
          if(products.id == productsId){
                products.nombre = nombre,
                products.dia = dia,
                products.ubicacion = ubicacion,
                products.sede = sede,
                products.participacion = participacion,
                products.capacidad = Number(capacidad),
                products.price = Number(price),
                products.horario = Number(horario),
                products.categoria = categoria,
                products.generoBanda = generoBanda,
                products.descripcion = descripcion,
                products.biografia = biografia
                products.fotoEvento = fotoEvento.filename
            }
        })
        // console.log("infoUser:AntesDeJSON", req.session.logged);
        fs.writeFileSync(productsFilePath,JSON.stringify(products, null, ' '));
        // console.log("infoUser:DespuesDeJSON", req.session.logged);
        
        res.render('./products/catalogo', {products});
        // console.log("infoUser:DespuesDeRENDER", req.session.logged);
    
    },
    destroy : (req, res) => {
        const id = req.params.id;
        const filteredProducts = products.filter((products)=> products.id != id)
        fs.writeFileSync(productsFilePath,JSON.stringify(filteredProducts, null, ' '));

        res.redirect('/')
	}
}

module.exports = administradorController;
