function adminMiddleware(req, res, next) {
    if(!req.session.logged){
        return res.redirect('/');
    }
    let userInLogin = req.session.loggedAdmin
    
    if (userInLogin.admin == false) {
        return res.redirect('/');
	}
	next();
}

module.exports = adminMiddleware;