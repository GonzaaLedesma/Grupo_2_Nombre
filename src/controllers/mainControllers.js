const db = require('../database/models');
const sequelize = db.sequelize;

const mainController = {
    index : (req,res)=>{
        // console.log("infoUser:Home", req.session.logged);
        // console.log(db.usuarios);

        db.Usuario.findAll()
            .then(users => {
                console.log(users.nombre);
                res.render("home", {titlePage:"- Home"})
            })
            .catch(err =>{
                res.send(err)
            })
    }
}

module.exports = mainController;