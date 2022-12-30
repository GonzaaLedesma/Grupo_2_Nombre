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
          genero_id_favorito: dataTypes.INTEGER
    };
    let config = {
      tableName: 'usuarios',
      timestamps: false
    };

    const Usuario= sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.Genero, {
          as:"generoId",
          foreignKey:"genero_id_favorito"
      });
        Usuario.hasMany(models.Tipo_Usuario, {
          as:"usuario",
          foreignKey:"usuario_id"
      }),
        Usuario.belongsToMany(models.Genero, {
            as: "generos",
            through: "usuario_genero",
            foreignKey: "usuario_id",
            otherKey: "genero_id",
            timestamps: false
        }),
        Usuario.hasMany(models.Carrito, {
            as:"usuario_carrito",
            foreignKey:"evento_id"
        })
    };

    return Usuario;
}