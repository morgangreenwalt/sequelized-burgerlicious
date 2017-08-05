var db = require("../models");

module.exports = function(app) {
    var exphbs = require('express-handlebars');
    app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

    app.get("/", function(req, res) {
        db.Burgers.findAll({
            where: {
                devoured: false
            }
        }).then(function(findBurgers) {
            var burgersObject = {
                Burgers: findBurgers
            };
            console.log(burgersObject);
            res.render("index", burgersObject);
        });
    });

    app.post("/", function(req, res) {
        db.Burgers.create({
            burger_name: req.body.burger_name,
            devoured: false
        }).then(function(newBurger) {
            res.redirect("/");
        });
    });

    app.put("/", function(req, res) {
        db.Burgers.update({ devoured: true }, {
            where: {
                id: req.params.id
            }
        }).then(function(updateBurger) {
            res.redirect("/");
        });
    });
};