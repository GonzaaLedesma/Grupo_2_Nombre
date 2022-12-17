module.exports = (sequelize, dataTypes) => {
    let alias = 'TipoUsuario'
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        admin: {
            type: dataTypes.BOOLEAN,
            defaultValue: false
        }
    };
    let config = {
        tableName: 'tipo_usuario',
        timestamps: false
    };

    const TipoUsuario = sequelize.define(alias, cols, config);

    TipoUsuario.associate = function(models){
        TipoUsuario.belongsTo(models.Usuario, {
            as:"usuario",
            foreignKey:"usuario_id"
        })
    };

    return TipoUsuario;
}