module.exports = (sequelize, dataTypes) => {
    let alias = 'Evento'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          nombre_evento: {
            type: dataTypes.STRING(50),
            allowNull: false
          },
          fecha: {
            type: dataTypes.DATEONLY,
            allowNull: false
          },
          ubicacion: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          sede: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          capacidad_sede: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          precio: {
            type: dataTypes.INTEGER,
            allowNull: false
          },
          participacion: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          horario: {
            type: dataTypes.TIME,
            allowNull: false
          },
          descripcion: {
            type: dataTypes.STRING(255),
            allowNull: false
          },
          biografia: {
            type: dataTypes.STRING(255),
            allowNull: false
          },
          foto_evento: {
            type: dataTypes.STRING(50),
            allowNull: false
          },
          id_categoria: dataTypes.INTEGER

    };
    let config = {
        tableName: 'eventos',
        timestamps: false
    };

    const Evento = sequelize.define(alias, cols, config);

    Evento.associate = function(models){
      Evento.belongsTo(models.Categoria, {
            as:"categoria",
            foreignKey:"id_categoria"
        }),
        Evento.belongsToMany(models.Genero, {
            as: "eventosGenero",
            through: "evento_genero",
            foreignKey: "evento_id",
            otherKey: "genero_id",
            timestamps: false
        }),
        Evento.hasMany(models.Carrito, {
            as: "evento_carrito",
            foreignKey: "genero_id",
        })
    };



    return Evento;
}