function adminLoggedMiddleware(req, res, next) {
    if(req.session.logged){
        
        res.locals.adminLogin = false;
        let userInLogin = req.session.logged

        if (userInLogin.tipoUsuario == true) {

            res.locals.adminLogin = true;
        }
    }
    
	next();
}

module.exports = adminLoggedMiddleware;