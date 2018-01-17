const router = require('express').Router();

router.use('/questions', require('./question'));

module.exports = router;