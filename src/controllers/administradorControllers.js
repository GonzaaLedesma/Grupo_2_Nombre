const db = require('../database/models');
const sequelize = db.sequelize;

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const administradorController = {
    creacion : (req,res)=>{
         res.render("products/creacionProducto", {titlePage:"- Creacion"});
    },
    edicion : (req,res)=>{
        db.Evento.findByPk(req.params.id)
        .then(editarProducto => {
            res.render("products/edicionProducto", {editarProducto , titlePage:"- Edicion"});
        });
    },
    creacionPost : (req,res)=>{
        const fotoEvento = req.file;
        const {nombre,dia,ubicacion,sede,participacion,capacidad,price,horario,descripcion,biografia,categoria,generoBanda} = req.body
         db.Evento.create({
            nombre_evento : nombre,
            fecha: dia,
            ubicacion : ubicacion,
            sede : sede,
            capacidad_sede : Number(capacidad),
            precio : Number(price),
            participacion : participacion,
            horario : Number(horario),
            descripcion : descripcion,
            biografia : biografia,
            foto_evento : fotoEvento.filename,
            id_categoria:categoria,
            eventosGenero:generoBanda
        })
        .then(evento=>{
            return res.redirect("catalogo")
        })
        .catch(err =>{
            res.send(err)
        })        
   },
    edicionPut : (req,res)=>{
        const fotoEvento = req.file;
        const {nombre,dia,ubicacion,sede,participacion,capacidad,price,horario,descripcion,biografia,categoria,generoBanda} = req.body
        db.Evento.update({
           nombre_evento : nombre,
           fecha: dia,
           ubicacion : ubicacion,
           sede : sede,
           capacidad_sede : Number(capacidad),
           precio : Number(price),
           participacion : participacion,
           horario : Number(horario),
           descripcion : descripcion,
           biografia : biografia,
           foto_evento : fotoEvento.filename,
           id_categoria:categoria,
           eventosGenero:generoBanda
       },
       {
        where: {
            id : req.params.id
        }
        })
       .then(evento=>{
            return res.redirect("/")
       })
       .catch(err =>{
           res.send(err)
       })          
    },
    destroy : (req, res) => {
        let eventoId = req.params.id;
        db.Evento.destroy({
            where:{id:eventoId},force:true
        })
        .then(()=>{
            return res.redirect('/')
        })
        .catch(error => res.send(error))
    }
}

module.exports = administradorController;
