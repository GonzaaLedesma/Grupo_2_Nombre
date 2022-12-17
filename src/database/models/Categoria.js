module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria'
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
        tableName: 'categorias',
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.hasMany(models.Evento, {
            as:"categoria",
            foreignKey:"id_categoria"
        })
    };

    return Categoria;
}