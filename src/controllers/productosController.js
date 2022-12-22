const db = require("../database/models");
const sequelize = db.sequelize;

const productosController = {
  catalogo: async (req, res) => {
    const products = await db.Evento.findAll();
    if (req.session.logged) {
      const genero_usuario = await db.Usuario_Genero.findAll({
        // raw: false,
        limit: 6,
        where: {
          usuario_id: req.session.logged.id,
        },
      });
      const genero_evento = await db.Evento_Genero.findAll();
      console.log("HOLA", genero_usuario);
      return res.render("products/catalogo", {
        genero_usuario,
        genero_evento,
        products,
        titlePage: "- Catalogo",
      });
    };
    return res.render("products/catalogo", {
      products,
      titlePage: "- Catalogo",
    });
  },
  detalles: async (req, res) => {
    const detalle = await db.Evento.findByPk(req.params.id);
    res.render("products/detalleProducto", {
      detalle,
      titlePage: "- Detalles",
    });
  },
  carrito: (req, res) => {
    return res.render("products/carrito", { titlePage: "- Carrito" });
  },
  ayuda: (req, res) => {
    return res.render("products/ayuda", { titlePage: "- Ayuda" });
  },
};

module.exports = productosController;
