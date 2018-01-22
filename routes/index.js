module.exports = (app, config, express) => {

    app.get("/", (req, res) => {
        res.render('index', {
            'nav' : {
                'selectedNode' : 'add-stub'
            }
        });
    });

    app.get("/add-stub", (req, res) => {
        res.render('add-stub', {
            'nav' : {
                'selectedNode' : 'add-stub'
            }
        });
    });

    app.get("/update-stub", (req, res) => {
        res.render('update-stub', {
            'nav' : {
                'selectedNode' : 'udpate-stub'
            }
        });
    });

    app.get("/edit-question", (req, res) => {
        res.render('edit-question', {
            'nav' : {
                'selectedNode' : 'edit-question'
            }
        });
    });

};