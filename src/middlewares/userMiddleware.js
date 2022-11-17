function authMiddleware(req, res, next) {
	if (req.session.logged) {
		return res.redirect('perfil');
	}
	next();
}

module.exports = authMiddleware;