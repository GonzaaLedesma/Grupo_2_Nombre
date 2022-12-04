module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre_apellido : {
            type : dataTypes.VARCHAR
        },
        nombre_usuario : {
            type : dataTypes.VARCHAR
        },
        email : {
            type : dataTypes.VARCHAR
        },
        pais : {
            type : dataTypes.VARCHAR
        },
        contraseña : {
            type : dataTypes.VARCHAR
        },
        gustos : {
            type : dataTypes.VARCHAR
        },
        genero : {
            type : dataTypes.VARCHAR
        },
        descripcion : {
            type : dataTypes.VARCHAR
        },
        tipo_usuario : {
            type : dataTypes.TINTINT
        },
        foto_perfil : {
            type : dataTypes.VARCHAR
        },

    };
    let config = {
        tableName: 'usuario',
        timestamps: false
    };

    const Usuario= sequelize.define(alias, cols, config);

    return Usuario;
}