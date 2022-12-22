module.exports = (sequelize, dataTypes) => {
    let alias = 'Tipo_Usuario'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
        },
        admin: {
            type: dataTypes.BOOLEAN,
        }
    };
    let config = {
        tableName: 'tipo_usuario',
        timestamps: false
    };

    const Tipo_Usuario = sequelize.define(alias, cols, config);

    Tipo_Usuario.associate = function(models){
        Tipo_Usuario.belongsTo(models.Usuario, {
            as:"usuario",
            foreignKey:"usuario_id"
        })
    };

    return Tipo_Usuario;
}