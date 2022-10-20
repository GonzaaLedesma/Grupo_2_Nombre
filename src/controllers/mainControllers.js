const express = require('express');

const mainController = {
    index : (req,res)=>{
        return res.render("home")
    }
}

module.exports = mainController;