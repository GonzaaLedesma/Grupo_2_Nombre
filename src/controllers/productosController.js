const db = require("../database/models");
const { Op } = require("sequelize");

const productosController = {
  catalogo: async (req, res) => {
    const products = await db.Evento.findAll();
    if (req.session.logged) {
      const genero_evento = await db.Evento_Genero.findAll({
        where: {
          genero_id: userDetail.genero_id_favorito,
        },
      });
      const dataValuesArray = genero_evento.map((item) => item.dataValues);
      return res.render("products/catalogo", {
        dataValuesArray,
        products,
        titlePage: "- Catalogo",
      });
    }
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
  carrito: async (req, res) => {
    const dataEvento = await db.Evento.findAll();
    const dataCarrito = await db.Carrito.findAll({
      where: {
        usuario_id: res.locals.logged.id,
      },
    });
    const eventoArray = dataEvento.map((item) => item.dataValues);
    const carritoArray = dataCarrito.map((item) => item.dataValues);
    return res.render("products/carrito", {
      carritoArray,
      eventoArray,
      titlePage: "- Carrito",
    });
  },
  carritoAdd: async (req, res) => {
    await db.Carrito.create({
      usuario_id: res.locals.logged.id,
      evento_id: req.params.id,
      activo: false,
      cantidad: req.body.cantidad,
    });
    return res.redirect("../../producto/carrito");
  },
  carritoDelete: async (req, res) => {
    await db.Carrito.destroy({
      where: {
        usuario_id: req.params.id,
        activo: false,
      },
    });
    return res.redirect("../../producto/carrito");
  },
  carritoDeleteRealizado: async (req, res) => {
    await db.Carrito.destroy({
      where: {
        usuario_id: req.params.id,
        activo: true,
      },
    });
    return res.redirect("../../carrito");
  },
  carritoUpdate: async (req, res) => {
    await db.Carrito.update(
      {
        activo: true,
      },
      {
        where: {
          usuario_id: req.params.id,
        },
      }
    );
    return res.redirect("../../producto/carrito");
  },

  ayuda: (req, res) => {
    return res.render("products/ayuda", { titlePage: "- Ayuda" });
  },
  busqueda: async (req, res) => {
    let data = req.body.busqueda;
    const products = await db.Evento.findAll({
      where: {
        nombre_evento: { [Op.like]: `%${data}%` },
      },
    });
    const dataArray = products.map((item) => item.dataValues);
    console.log(dataArray);
    return res.render("products/busqueda", {
      dataArray,
      titlePage: "- Resultado",
    });
  },
};

module.exports = productosController;
