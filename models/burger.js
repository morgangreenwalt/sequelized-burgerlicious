module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        devoured {
            DataTypes.BOOLEAN
        }
    });
    return Burger;
};