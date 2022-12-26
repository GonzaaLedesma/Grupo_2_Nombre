const db = require("../database/models");
const sequelize = db.sequelize;

const productosController = {
  catalogo: async (req, res) => {
    const products = await db.Evento.findAll();
    if (req.session.logged) {
      const genero_evento = await db.Evento_Genero.findAll({
        where:{
          genero_id:userDetail.genero_id_favorito
        }
      });
      const dataValuesArray = genero_evento.map((item) => item.dataValues);     
      return res.render("products/catalogo", {
        dataValuesArray,
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
