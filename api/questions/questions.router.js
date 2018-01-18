const router = require('express').Router();
const controller = require('./questions.controller');


const validateRequestBody = (req, res, context, message = 'request body is blank') => {
    if(req.body === {}) {
        console.error(context , ' ' , message  , err);
        res.status(400).send({error: message });
    }
};

/**
 *  topic, difficulty, number of questions
 *  localhost:3000/questions/?topic=cricket&difficulty=2&count=5
 *
 **/

router.get('/', function(req, res){
    try {
        let reqParams = req.query;

        if(typeof reqParams.topic === 'undefined' || reqParams.topic === "" ){
            res.status(200).send({error: 'Topic is missing!!!'});
            return;
        }

        if(typeof reqParams.count === 'undefined' || reqParams.count === "" ){
            res.status(200).send({error: 'You need to provide count in order to fetch data.'});
            return;
        }

        controller.getQuestions({
                topic : reqParams.topic,
                lod : reqParams.lod,
                count : reqParams.count
            },
            function (err, result) {
                if (err) {
                    console.error('Error in getQuestions function of questions, and here is the error \n', err);
                    res.status(400).send({error: 'Something went wrong!!!'});
                    return;
                }
                res.send(result);
            });
    } catch (err) {
        console.error('questions.router: Some error in get request', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    }
});

/**
 *  {
        label: { type: String, required: true },
        image: { type: String, default: null },
        topics: [ {type: String} ],
        options: [{
            _id: { type: Number, required: true },
            answer: { type: String, required: true }
        }],
        correctOption: Number,
        difficulty: { type: String, required: true, enum: lod, default: "medium" },
        analytics: {
            ansTime: { type: Number },
            correctness: { type: Number, min: 0, max: 100, default: 100 },
            askedCount: { type: Number, default: 0 },
            lastAsked: { type: Date, default: null }
        }
    }
 */
router.post ("/add-question", (req, res) => {
    try{
        controller.addNewQuestion(req.body,(err, result) => {
            if(err){
                console.error('Error in adding questions, and here is the error \n', err);
                res.status(400).send({error: 'Error in adding questions'});
            }
            res.send(result);
        } );
    } catch (err) {
        console.error('questions.router: Some error in post request (/questions/add)', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    }
});


/**
 * This api should update a single question, except its analytics which can not be changed via any author.
 * For analytics use /update-question-analytics
 * required parameters:
 * {
 *   operation: label / image / topics / options / correctOption / difficulty
 *   questionId : <Number>
 *   data: {
 *      <question object with key value parameters>
 *   }
 * }
 */
router.post('/update-question', (req, res) => {
    try{

        validateRequestBody(req, res, 'questions.router/update-question');

        if(typeof req.body.operation === "undefined" || req.body.operation === ""){
            console.error('questions.router/update-question / operation is blank', err);
            res.status(400).send({error: 'operation is blank'});
        }

        if(typeof req.body.questionId === "undefined" || req.body.questionId === ""){
            console.error('questions.router/update-question / questionId is blank', err);
            res.status(400).send({error: 'questionId is blank'});
        }

        if(typeof req.body.data === "undefined" || req.body.data === ""){
            console.error('questions.router/update-question / data to change is blank', err);
            res.status(400).send({error: 'data to change is blank'});
        }

        controller.updateQuestion(req.body, (err, result) =>{
            if(err){
                console.error('Error in updating questions, and here is the error \n', err);
                res.status(400).send({error: 'Error in updating questions'});
            }
            res.send(result);
        });

    } catch (err) {
        console.error('questions.router: Some error in post request (/questions/add)', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    }
});

/**
 * /update-question-analytics
 *
 * questionId : <Number>
 * data: {
 *     <question object with key value parameters>
 * }
 *
 *
 */
router.post('/update-question-analytics', (req, res) => {
    try{

        validateRequestBody(req, res, 'questions.router/update-question-analytics');

        if(typeof req.body.questionId === "undefined" || req.body.questionId === ""){
            console.error('questions.router/update-question-analytics / questionId is blank', err);
            res.status(400).send({error: 'questionId is blank'});
        }

        controller.updateQuestionAnalytics(req.body, (err, result) =>{
            if(err){
                console.error('Error in updating questions analytics, and here is the error \n', err);
                res.status(400).send({error: 'Error in updating questions analytics'});
            }
            res.send(result);
        });

    } catch (err) {
        console.error('questions.router: Some error in post request (/questions/add)', err);
        res.status(500).send({error: 'Unexpected internal error, please try later..!'});
    }
});


module.exports = router;