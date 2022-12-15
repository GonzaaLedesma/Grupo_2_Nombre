module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          nombre: {
            type: dataTypes.STRING(55),
            allowNull: false
          },
          apellido: {
            type: dataTypes.STRING(55),
            allowNull: false
          },
          nombre_usuario: {
            type: dataTypes.STRING(55),
            allowNull: false
          },
          contrasenia: {
            type: dataTypes.STRING(100),
            allowNull: false
          },
          email: {
            type: dataTypes.STRING(55),
            allowNull: false
          },
          tipo_usuario: {
            type: dataTypes.BOOLEAN,
            defaultValue: false
          },
          genero: {
            type: dataTypes.STRING(55),
            allowNull: false
          },
          pais: {
            type: dataTypes.STRING(55),
            allowNull: false
          },
          descripcion: {
            type: dataTypes.STRING(255),
            allowNull: false
          },
          foto_perfil: {
            type: dataTypes.STRING(100),
            allowNull: false
          },

    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const Usuario= sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.hasMany(models.Genero, {
            as:"genero_id_favorito",
            foreingKey:"genero_id"
        }),
        Usuario.belongsToMany(models.Genero, {
            as: "generos",
            through: "usuario_genero",
            foreingKey: "usuario_id",
            otherKey: "genero_id",
            timestamps: false
        }),
        Usuario.belongsTo(models.Carrito, {
            as:"usuario_carrito",
            foreingKey:"genero_id"
        })
    };

    return Usuario;
}