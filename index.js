const express = require('express');
const bodyParser = require('body-parser');
const mongoConn = require('./mongoConnection')();

let app = express();

// Setup bodyParsing middleware
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 1000000 // experiment with this parameter and tweak
 }));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(require('./api'));
app.listen(3000, () => console.log('App listening on port 3000!'));

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
 
const pbInstance = require('./event-pubsub/subscribe');

require("./routes")(app, {});


module.exports = app;
