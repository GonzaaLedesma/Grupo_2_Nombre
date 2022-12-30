const db = require("../database/models");

async function loggedMiddleware(req, res, next) {
  res.locals.userLogin = false;

  if (req.cookies.datosEmail) {
    const usuarioCookie = await db.Usuario.findOne({
      where: {
        email: req.cookies.datosEmail
      }
    });

    if (usuarioCookie) {
      res.locals.logged = usuarioCookie;
    }
  }

  if (req.session.logged) {
    res.locals.userLogin = true;
    res.locals.logged = req.session.logged;
    userDetail = req.session.logged;
  }

  next();
}

module.exports = loggedMiddleware;
