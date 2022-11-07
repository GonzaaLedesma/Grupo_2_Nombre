const express = require('express');

const mainController = {
    index : (req,res)=>{
        res.render("home")
    }
}

module.exports = mainController;