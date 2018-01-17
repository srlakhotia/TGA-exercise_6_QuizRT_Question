const router = require('express').Router();
const controller = require('./stub.router');

// topic, level of difficulty, number of questions
router.get('/', function(req, res){
    try {
        let reqParams = req;
        console.log(reqParams);
        controller.getStub({

            } ,function (err, result) {
            if (err) {
                console.error('Error in GET of vendros, ERROR::', err);
                res.status(400).send({error: 'Something went wrong, please try later..!'});
                return;
            }
            res.send(result);
            return;
        })
    } catch (err) {
        console.error('Unexpected error in GET of vendors, ERROR::', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
        return;
    }
});

module.exports = router;