function loggedMiddleware(req, res, next) {
	res.locals.userLogin = false;

	if (req.session && req.session.logged) {
		res.locals.userLogin = true;
		res.locals.logged = req.session.logged;
	}
	// revisar
	next();
}

module.exports = loggedMiddleware;