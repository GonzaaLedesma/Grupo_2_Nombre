const db = require("../database/models");

const apiController = {
  products: async (req, res) => {
    const count = await db.Evento.count();
    const products = await db.Evento.findAll();
    const productsWithDetail = products.map((product) => {
      return {
        ...product,
        detail: `http://localhost:3001/api/productos/${product.id}`,
      };
    });

    const countActuales = await db.Evento.findAndCountAll({
      where: {
        id_categoria: 1,
      },
    });
    const countNuevos = await db.Evento.findAndCountAll({
      where: {
        id_categoria: 2,
      },
    });
    const countProximos = await db.Evento.findAndCountAll({
      where: {
        id_categoria: 3,
      },
    });
    const countPasados = await db.Evento.findAndCountAll({
      where: {
        id_categoria: 4,
      },
    });
    res.status(200).json({
      count,
      countActuales,
      countNuevos,
      countProximos,
      countPasados,
      productsWithDetail,
    });
  },
  oneProduct: async (req, res) => {
    try {
      // Obtener producto específico
      const product = await db.Evento.findByPk(req.params.id);
      const generos = await db.Evento_Genero.findAll({
        where: {
          evento_id: req.params.id,
        },
      });
      const dataValuesArray = generos.map((item) => item.dataValues);
      const arrayGeneros = dataValuesArray.map(item => {
        let genero = ''
        switch (item.genero_id) {
            case 1:
                genero = 'rock'
                break
            case 2:
                genero = 'hard rock'
                break
            case 3:
                genero = 'pop'
                break
            case 4:
                genero = 'rock alternativo'
                break
            case 5:
                genero = 'pop rock'
                break
            case 6:
                genero = 'pop punk'
                break
            default:
                genero = 'unknown'
        }
        return { ...item, genero }
    });
      // Construir objeto literal
      const productData = {
        id: product.id,
        nombre_evento: product.nombre_evento,
        fecha: product.fecha,
        ubicacion: product.ubicacion,
        sede: product.sede,
        capacidad_sede: product.capacidad_sede,
        precio: product.precio,
        participacion: product.participacion,
        horario: product.horario,
        descripcion: product.descripcion,
        biografia: product.biografia,
        foto_evento: `http://localhost:3001/images/${product.foto_evento}`,
        id_categoria: product.id_categoria,
      };
      // Devolver objeto literal en la respuesta
      res.status(200).json({ product: productData, arrayGeneros });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  users: async (req, res) => {
    const count = await db.Usuario.count();
    const usuario = await db.Usuario.findAll();
    const usuarioWithDetail = usuario.map((usuario) => {
      return {
        ...usuario,
        detail: `http://localhost:3001/api/usuarios/${usuario.id}`,
      };
    });
    res.status(200).json({
      count,
      usuarioWithDetail,
    });
  },
  oneUser: async (req, res) => {
    try {
      const usuario = await db.Usuario.findByPk(req.params.id);
      const userData = {
        id: usuario.id,
        nombre: usuario.nombre,
        apellido: usuario.apellido,
        nombre_usuario: usuario.nombre_usuario,
        email: usuario.email,
        identidad_de_genero: usuario.identidad_de_genero,
        pais: usuario.pais,
        descripcion: usuario.descripcion,
        foto_perfil: `http://localhost:3001/images/${usuario.foto_perfil}`,
      };
      res.status(200).json({ usuario: userData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = apiController;
