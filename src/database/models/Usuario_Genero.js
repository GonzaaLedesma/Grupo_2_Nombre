module.exports = (sequelize, dataTypes) => {
  let alias = "Usuario_Genero";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    usuario_id: {
      type: dataTypes.INTEGER,
    },
    genero_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: "usuario_genero",
    timestamps: false,
  };

  const UsuariosGeneros = sequelize.define(alias, cols, config);

  return UsuariosGeneros;
};
