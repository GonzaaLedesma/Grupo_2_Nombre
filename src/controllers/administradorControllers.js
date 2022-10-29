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
        const fotoEvento = req.file;
        const {Nombre,Dia,Ubicacion,Sede,Participacion,Capacidad,Price,Horario,Categoria,Descripcion,Biografia} = req.body
        let newProduct = {
            id : Date.now(),
            Nombre : Nombre,
            Dia : Dia,
            Ubicacion : Ubicacion,
            Sede :Sede,
            Participacion : Participacion,
            Capacidad : Number(Capacidad),
            Price : Number(Price),
            Horario : Number(Horario),
            Categoria : Categoria,
            Descripcion : Descripcion,
            Biografia : Biografia,
            fotoEvento : fotoEvento.filename
        } 
        
        products.push(newProduct);
        console.log(newProduct);
        
        fs.writeFileSync(productsFilePath,JSON.stringify(products, null, ' '));
        
        res.redirect('/');
   },
    edicionPut : (req,res)=>{
        /*const productsId: req.params.id;
        // const {Nombre,Dia,Ubicacion,Sede,Participacion,Capacidad,Price,Horario,Categoria,Descripcion,Biografia,fotoEvento} = req.body
        // products.forEach((products)=>{
        //  if(products.id == productsId){
                products.Nombre : Nombre,
                products.Dia : Dia,
                products.Ubicacion : Ubicacion,
                products.Sede : Sede,
                products.Participacion : Participacion,
                products.Capacidad : Capacidad,
                products.Price : Price,
                products.Horario : Horario,
                products.Categoria : Categoria,
                products.Descripcion : Descripcion,
                products.Biografia : Biografia,
                products.fotoEvento : fotoEvento
        }
        })
        
      
        let productosToEdit = productos[Administrador]
         res.render ('productosToEdit', {productoaToEdit : productosToEdit})
        */
        
    },
    destroy : (req, res) => {
        
	}
}

module.exports = administradorController;
