module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Burgers", {
        burger_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN
    });
};