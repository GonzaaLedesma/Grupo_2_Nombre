const db = require('../database/models');
const sequelize = db.sequelize;

const mainController = {
    index : (req,res)=>{
        res.render("home", {titlePage:"- Home"})
        // db.Genero.findAll()
        //     .then(users => {
        //         console.log(users);
        //         res.render("home", {titlePage:"- Home"})
        //     })
        //     .catch(err =>{
        //             res.send(err)
        //     })
    }
}

module.exports = mainController; 