const db = require("../database/models");
const sequelize = db.sequelize;

const administradorController = {
  creacion: (req, res) => {
    res.render("products/creacionProducto", { titlePage: "- Creacion" });
  },
  edicion: async (req, res) => {
    const editarProducto = await db.Evento.findByPk(req.params.id);
    res.render("products/edicionProducto", {
      editarProducto,
      titlePage: "- Edicion",
    });
  },
  creacionPost: async (req, res) => {
    const fotoEvento = req.file;
    const {
      nombre,
      dia,
      ubicacion,
      sede,
      participacion,
      capacidad,
      price,
      horario,
      descripcion,
      biografia,
      categoria,
      generoBanda,
    } = req.body;
    const data = await db.Evento.create({
      nombre_evento: nombre,
      fecha: dia,
      ubicacion: ubicacion,
      sede: sede,
      capacidad_sede: Number(capacidad),
      precio: Number(price),
      participacion: participacion,
      horario: Number(horario),
      descripcion: descripcion,
      biografia: biografia,
      foto_evento: fotoEvento.filename,
      id_categoria: categoria,
    });
    generoBanda.forEach(async (genero) => {
     await db.Evento_Genero.create({
        evento_id: data.dataValues.id,
        genero_id: genero,
      });
    });
    return res.redirect("/");
  },
  edicionPut: async (req, res) => {
    const fotoEvento = req.file;
    const {
      nombre,
      dia,
      ubicacion,
      sede,
      participacion,
      capacidad,
      price,
      horario,
      descripcion,
      biografia,
      categoria,
      generoBanda,
    } = req.body;
    await db.Evento.update(
      {
        nombre_evento: nombre,
        fecha: dia,
        ubicacion: ubicacion,
        sede: sede,
        capacidad_sede: Number(capacidad),
        precio: Number(price),
        participacion: participacion,
        horario: Number(horario),
        descripcion: descripcion,
        biografia: biografia,
        foto_evento: fotoEvento.filename,
        id_categoria: categoria,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    // generoBanda.forEach(async (genero) => {
    //   await db.Evento_Genero.update(
    //     {
    //       evento_id: req.params.id,
    //       genero_id: genero,
    //     },
    //     {
    //       where: {
    //         evento_id: req.params.id,
    //       },
    //     }
    //   );
    // });
    return res.redirect("/");
  },
  destroy: async (req, res) => {
    let eventoId = req.params.id;
    await db.Evento_Genero.destroy({
      limit: 6,
      where: { evento_id: eventoId },
      force: true,
      cascade: true,
    });
    await db.Evento.destroy({
      where: { id: eventoId },
      force: true,
    });
    return res.redirect("/");
  },
};

module.exports = administradorController;
