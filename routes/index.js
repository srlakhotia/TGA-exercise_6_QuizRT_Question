module.exports = (app, config, express) => {

    app.get("/", (req, res) => {
        res.render('index');
    });

    app.get("/add-stub", (req, res) => {
        res.render('add-stub');
    });

    app.get("/edit-stub", (req, res) => {
        res.render('edit-stub');
    });

    app.get("/edit-question", (req, res) => {
        res.render('add-stub');
    });

};