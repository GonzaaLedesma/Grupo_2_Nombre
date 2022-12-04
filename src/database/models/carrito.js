module.exports = (sequelize, dataTypes) => {
    let alias = 'Carrito'
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        evento_id : {
            type : dataTypes.INTEGER
        },
        cantidad : {
            type : dataTypes.INTEGER
        },
        precio_id : {
            type : dataTypes.INTEGER
        },
        fecha_id : {
            type : dataTypes.DATE
        }
    };
    let config = {
        tableName: 'carrito',
        timestamps: false
    };

    const Carrito = sequelize.define(alias, cols, config);

    return Carrito;
}