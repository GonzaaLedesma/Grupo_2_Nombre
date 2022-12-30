module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          activo: {
            type: dataTypes.BOOLEAN,
            defaultValue: false
          },
          cantidad : {
            type : dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'carrito',
        timestamps: false
    };

    const Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function(models){
        Carrito.belongsTo(models.Evento, {
            as: "evento_carrito",
            foreignKey: "evento_id",
        }),
        Carrito.belongsTo(models.Usuario, {
            as: "usuario_carrito",
            foreignKey: "usuario_id",
        })
    };

    return Carrito;
}