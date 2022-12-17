module.exports = (sequelize, dataTypes) => {
    let alias = 'Genero'
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        nombre: {
            type: dataTypes.STRING(100),
            allowNull: false
          }
    };
    let config = {
        tableName: 'generos',
        timestamps: false
    };

    const Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models){
        Genero.hasMany(models.Usuario, {
            as:"generoId",
            foreignKey:"genero_id_favorito"
        }),
        Genero.belongsToMany(models.Usuario, {
            as: "generos",
            through: "usuario_genero",
            foreignKey: "genero_id",
            otherKey: "usuario_id",
            timestamps: false
        }),
        Genero.belongsToMany(models.Evento, {
            as: "eventos",
            through: "eveneto_genero",
            foreignKey: "genero_id",
            otherKey: "evento_id",
            timestamps: false
        })
    };

    return Genero;
}