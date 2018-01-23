var publishService = require("../event-pubsub/publish");

module.exports = (app, config, express) => {

    app.get("/", (req, res) => {
        res.render('index', {
            'nav' : {
                'selectedNode' : 'add-stub'
            }
        });
    });

    app.get("/add-stub", (req, res) => {
        res.render('index', {
            'nav' : {
                'selectedNode' : 'add-stub'
            }
        });
    });

    app.get("/update-stub", (req, res) => {
        res.render('update-stub', {
            'nav' : {
                'selectedNode' : 'update-stub'
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

    app.get("/data-mocking", (req, res) => {
        res.render('data-event-mocking', {
            'nav' : {
                'selectedNode' : 'data-event-mocking'
            }
        });
    });

    // This is temporary routing for testing events - after integration
    app.post("/trigger-analytics-update-event", (req, res) => {
        try{
            publishService.onQuestionAnalyticsUpdate(req.body);
            res.send({"status":"success"});
        } catch (e){
            res.status(400).send({error: "what a programer you are?"});
        }

    });

};