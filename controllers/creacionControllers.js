const express = require('express');

const creacionController = {
    creacion : (req,res)=>{
        return res.render("creacion")
    }
}

module.exports = creacionController;