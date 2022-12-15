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
          }
    };
    let config = {
        tableName: 'carrito',
        timestamps: false
    };

    const Carrito = sequelize.define(alias, cols, config);

    Carrito.associate = function(models){
        Carrito.hasMany(models.Evento, {
            as: "evento_carrito",
            foreingKey: "evento_id",
        }),
        Carrito.hasMany(models.Usuario, {
            as: "usuario_carrito",
            foreingKey: "usuario_id",
        })
    };

    return Carrito;
}