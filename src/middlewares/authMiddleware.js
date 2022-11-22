function authMiddleware(req, res, next) {
	if (!req.session.logged) {
		return res.redirect('/usuario/login');
	}
	next();
}

module.exports = authMiddleware;