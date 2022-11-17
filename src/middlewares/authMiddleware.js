function authMiddleware(req, res, next) {
	if (!req.session.logged) {
		return res.redirect('login');
	}
	next();
}

module.exports = authMiddleware;