let config = require('../config');
let NRP = require('node-redis-pubsub');

const nrp = new NRP(config.NRP);

module.exports = nrp;
