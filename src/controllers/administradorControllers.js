const express = require('express');
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const administradorController = {
    creacion : (req,res)=>{
         res.render("products/creacionProducto");
    },
    edicion : (req,res)=>{
         res.render("products/edicionProducto");
    },
    creacionPost : (req,res)=>{
        let newProduct = {
            id : Date.now(),
            Nombre : req.body.Nombre,
            Dia : req.body.Dia,
            Ubicacion : req.body.Ubicacion,
            Sede : req.body.Sede,
            Participacion : req.body.Participacion,
            Capacidad : Number(req.body.Capacidad),
            Price : Number(req.body.Price),
            Horario : Number(req.body.Horario),
            Categoria : req.body.Categoria,
            Descripcion : req.body.Descripcion,
            Biografia : req.body.Biografia,
            fotoEvento : req.body.fotoEvento
        } 
        
        products.push(newProduct);
        console.log(newProduct);
        
        fs.writeFileSync(productsFilePath,JSON.stringify(products, null, ' '));
        
        res.redirect('/products');
   },
    edicionPut : (req,res)=>{
        /*let Administrador: req.params.administradorController;
        
        
        let productos [{
          "id":1,
            "Nombre":"The Weezer",
            "Dia":"22 de Octubre",
            "Ubicacion":"Los Angeles",
            "Sede":"(Disney Concert Hall)",
            "Participacion":" OneRepublic, Halsey y mas",
            "Capacidad":500000,
            "Price":7000,
            "Horario":19,
            "Categoria":"Actuales",
            "Descripcion":"Los legendarios rockeros Weezer reimaginan su último álbum más los clásicos con la Orquesta Filarmónica de Los Ángeles. Grabado y capturado en el imponente Disney Hall. Disponible para VOD ahora.",
            "Biografia":"Weezer es una banda estadounidense de rock alternativo y power pop formada en Los Ángeles, California en 1992. La banda ha lanzado nueve álbumes y vendido más de 10 millones de álbumes en los EE. UU.",
            "fotoEvento":"Weezer.jpg"
        }]
        let productosToEdit = productos[Administrador]
         res.render ('productosToEdit', {productoaToEdit : productosToEdit})
        */
        
    },
    destroy : (req, res) => {
        
	}
}

module.exports = administradorController;
