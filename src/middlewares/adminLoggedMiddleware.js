function adminLoggedMiddleware(req, res, next) {
    if(req.session.loggedAdmin){
        
        res.locals.adminLogin = false;
        let userInLogin = req.session.loggedAdmin

        if (userInLogin.admin == true) {

            res.locals.adminLogin = true;
        }
    }
    
	next();
}

module.exports = adminLoggedMiddleware;