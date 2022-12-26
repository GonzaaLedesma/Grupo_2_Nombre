const db = require("../database/models");

async function loggedMiddleware(req, res, next) {
  res.locals.userLogin = false;

  // Verificamos si existe la cookie 'datosEmail'
  if (req.cookies.datosEmail) {
    // Si existe, buscamos el usuario en la base de datos
    const usuarioCookie = await db.Usuario.findOne({
      where: {
        email: req.cookies.datosEmail
      }
    });

    // Si encontramos un usuario, guardamos sus datos en la variable res.locals.logged
    if (usuarioCookie) {
      res.locals.logged = usuarioCookie;
    }
  }

  // Si existe la sesión 'logged', guardamos los datos del usuario en res.locals.logged
  if (req.session.logged) {
    res.locals.userLogin = true;
    res.locals.logged = req.session.logged;
    userDetail = req.session.logged;
    console.log(userDetail)
  }

  next();
}

module.exports = loggedMiddleware;
