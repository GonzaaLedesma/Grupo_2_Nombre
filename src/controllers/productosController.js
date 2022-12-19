const db = require("../database/models");
const sequelize = db.sequelize;

const productosController = {
  catalogo: (req, res) => {
    db.Evento.findAll({
      include: [{ association: "eventosGenero" }],
      raw: false,
      nest: true,
    })
      .then((products) => {
        return res.render("products/catalogo", {
          products,
          titlePage: "- Catalogo",
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },
  detalles: (req, res) => {
    db.Evento.findByPk(req.params.id)
    .then((detalle) => {
      res.render("products/detalleProducto", {
        detalle,
        titlePage: "- Detalles",
      });
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
