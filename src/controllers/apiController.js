const db = require("../database/models");

const apiController = {
  products: async (req, res) => {
    const count = await db.Evento.count();
    const products = await db.Evento.findAll();
    const productsWithDetail = products.map((product) => {
      return {
        ...product,
        product: {
          ...product.dataValues,
          detail: `http://localhost:3001/api/productos/${product.id}`,
          img: `http://localhost:3001/images/Catalogo/${product.foto_evento}`,
        }
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
      productsWithDetail,
      countActuales,
      countNuevos,
      countProximos,
      countPasados,
    });
  },
  oneProduct: async (req, res) => {
    try {
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
        foto_evento: `http://localhost:3001/images/Catalogo/${product.foto_evento}`,
        id_categoria: product.id_categoria,
      };
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
        usuario: {
          ...usuario.dataValues,
          detail: `http://localhost:3001/api/usuarios/${usuario.id}`,
          foto_perfil: `http://localhost:3001/images/Usuarios/${usuario.foto_perfil}`,
        }
      };
    });
    
    const countRock = await db.Usuario.findAndCountAll({
      where: {
        genero_id_favorito: 1,
      },
    });
    const counHardRock = await db.Usuario.findAndCountAll({
      where: {
        genero_id_favorito: 2,
      },
    });
    const countPop = await db.Usuario.findAndCountAll({
      where: {
        genero_id_favorito: 3,
      },
    });
    const countRockAlternativo = await db.Usuario.findAndCountAll({
      where: {
        genero_id_favorito: 4,
      },
    });
    const countPopRock = await db.Usuario.findAndCountAll({
      where: {
        genero_id_favorito: 5,
      },
    });
    const countPopPunk = await db.Usuario.findAndCountAll({
      where: {
        genero_id_favorito: 6,
      },
    });
    res.status(200).json({
      count,
      countRock,
      counHardRock,
      countPop,
      countRockAlternativo,
      countPopRock,
      countPopPunk,
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
        foto_perfil: `http://localhost:3001/images/Usuarios/${usuario.foto_perfil}`,
      };
      res.status(200).json({ usuario: userData });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  dataCart: async (req, res) => {
    try {
      const count = await db.Carrito.findAndCountAll();
      const carrito = await db.Carrito.findAll();
      res.status(200).json({ 
        count,
        carrito
       });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = apiController;
