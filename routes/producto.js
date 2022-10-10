const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/detalles',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../views/detalleProducto.html'))
})
router.get('/catalogo',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../views/catalogo.html'))
})

module.exports = router;