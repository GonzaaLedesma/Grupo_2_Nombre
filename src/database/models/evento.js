module.exports = (sequelize, dataTypes) => {
    let alias = 'Evento'
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre_concierto : {
            type : dataTypes.VARCHAR
        },
        fecha : {
            type : dataTypes.DATE
        },
        ubicacion : {
            type : dataTypes.VARCHAR
        },
        sede : {
            type : dataTypes.VARCHAR
        },
        participacion : {
            type : dataTypes.VARCHAR
        },
        capacidad_sede : {
            type : dataTypes.INTEGER
        },
        precio: {
            type : dataTypes.INTEGER
        },
        horario: {
            type : dataTypes.TIME
        },
        categoria : {
            type : dataTypes.VARCHAR
        },
        descripcion : {
            type : dataTypes.VARCHAR
        },
        biografia : {
            type : dataTypes.VARCHAR
        },
        foto_evento : {
            type : dataTypes.VARCHAR
        },
        genero_evento : {
            type : dataTypes.VARCHAR
        }

    };
    let config = {
        tableName: 'evento',
        timestamps: false
    };

    const Evento = sequelize.define(alias, cols, config);

    return Evento;
}