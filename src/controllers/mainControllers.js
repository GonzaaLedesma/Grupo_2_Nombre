
const mainController = {
    index : (req,res)=>{
        console.log("infoUser:Home", req.session.logged);
        res.render("home", {titlePage:"- Home"})
    }
}

module.exports = mainController;