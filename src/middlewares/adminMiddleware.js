function adminMiddleware(req, res, next) {
    if(!req.session.logged){
        return res.redirect('/');
    }
    let userInLogin = req.session.logged
    
    if (userInLogin.tipoUsuario == false) {
        return res.redirect('/');
	}
	next();
}

module.exports = adminMiddleware;