const router = require('express').Router();

router.use('/questions', require('./questions'));
router.use('/stubs', require('./stub'));
router.use('/sparql', require('./sparql'));

module.exports = router;