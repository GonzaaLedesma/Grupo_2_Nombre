const usuario = require("../models/Users");

function loggedMiddleware(req, res, next) {
	res.locals.userLogin = false;

	let cookieDatos = req.cookies.datosEmail;
	let usuarioCookie = usuario.findField('email', cookieDatos);
	
	if(usuarioCookie){
		res.locals.logged = usuarioCookie;
	}

	if (req.session.logged) {
		res.locals.userLogin = true;
		res.locals.logged = req.session.logged;
		userdetail = req.session.logged
	}
	
	next();
}


module.exports = loggedMiddleware;