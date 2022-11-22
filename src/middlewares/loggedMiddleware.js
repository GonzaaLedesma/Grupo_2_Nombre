const usuario = require("../models/Users");

function loggedMiddleware(req, res, next) {
	res.locals.userLogin = false;

	let cookieDatos = req.cookies.datosEmail;
	let usuarioCookie = usuario.findField('email', cookieDatos);
	
	// console.log(cookieDatos)

	if(usuarioCookie){
		res.locals.logged = usuarioCookie;
	}

	if (req.session.logged) {
		res.locals.userLogin = true;
		res.locals.logged = req.session.logged;
	}
	
	next();
}

module.exports = loggedMiddleware;