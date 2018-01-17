const express = require('express');
const bodyParser = require('body-parser');
const mongoConn = require('./mongoConnection')();

let app = express();

// Setup bodyParsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(require('./api'));
app.listen(3000, () => console.log('App listening on port 3000!'));

module.exports = app;