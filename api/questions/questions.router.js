const router = require('express').Router();
const controller = require('./questions.controller');

// topic, level of difficulty, number of questions
router.get('/', function(req, res){
    console.log("routing here");
    try {
        let reqParams = req.query;
        let questionSetParams = {};

        if(typeof reqParams.topic === 'undefined' || reqParams.topic === "" ){
            res.status(200).send({error: 'Topic is missing!!!'});
            return;
        }

        if(typeof reqParams.count === 'undefined' || reqParams.count === "" ){
            res.status(200).send({error: 'You need to provide count in order to fetch data.'});
            return;
        }

        questionSetParams = {
            topic : reqParams.topic,
            lod : reqParams.lod,
            count : reqParams.count
        };

        controller.getQuestions(questionSetParams ,function (err, result) {
            if (err) {
                console.error('Error in getQuestions function of questions, and here is the error \n', err);
                res.status(400).send({error: 'Something went wrong!!!'});
                return;
            }
            res.send(result);
            return;
        });
    } catch (err) {
        console.error('Unexpected error in GET of vendors, ERROR::', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
        return;
    }
});

module.exports = router;