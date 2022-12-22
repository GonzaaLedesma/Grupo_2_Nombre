module.exports = (sequelize, dataTypes) => {
  let alias = "Evento_Genero";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    evento_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    genero_id: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };
  let config = {
    tableName: "evento_genero",
    timestamps: false,
  };

  const EventosGeneros = sequelize.define(alias, cols, config);

  return EventosGeneros;
};
