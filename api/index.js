const router = require('express').Router();

router.use('/questions', require('./questions'));
router.use('/stubs', require('./stub'));

module.exports = router;