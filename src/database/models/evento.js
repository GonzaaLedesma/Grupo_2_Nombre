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
          }

    };
    let config = {
        tableName: 'evento',
        timestamps: false
    };

    const Evento = sequelize.define(alias, cols, config);

    Evento.associate = function(models){
        Evento.belongsToMany(models.Genero, {
            as: "eventos",
            through: "eveneto_genero",
            foreingKey: "evento_id",
            otherKey: "genero_id",
            timestamps: false
        }),
        Evento.belongsTo(models.Carrito, {
            as: "evento_carrito",
            foreingKey: "genero_id",
        })
    };



    return Evento;
}