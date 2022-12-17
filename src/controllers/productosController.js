const db = require('../database/models');
const sequelize = db.sequelize;

// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



const productosController = {
    catalogo : (req,res)=>{
        db.Evento.findAll({
            raw: true,
            nest: true
          })
            .then(products => {
              console.log(products);
              return res.render("products/catalogo", {products, titlePage:"- Catalogo"});
            })
            .catch(err => {
              res.send(err);
            });
    },
    detalles : (req,res)=>{
        // let detalle = products.find(products=> products.id == req.params.id)
        // res.render('products/detalleProducto',{detalle, titlePage:"- Detalles"})
    },
    carrito : (req,res)=>{
        // return res.render("products/carrito",{titlePage:"- Carrito"});
    },
    ayuda : (req,res)=>{
        // return res.render("products/ayuda", {titlePage:"- Ayuda"});
    },
}

module.exports = productosController;