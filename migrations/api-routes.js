var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({
            where: {
                devoured: false
            }
        }).then(function(findBurgers) {
            res.json(findBurgers);
        });
    });

    app.post("/", function(req, res) {
        db.Burger.create({
            burger_name: req.params.burger_name,
            devoured: false
        }).then(function(newBurger) {
            res.json(newBurger);
        });
    });

    app.put("/", function(req, res) {
        db.Burger.update(
            req.body, {
                where: {
                    devoured: req.body.devoured
                }
            }).then(function(updateBurger) {
            res.json(updateBurger);
        });
    });
};