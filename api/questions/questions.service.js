const QuestionModel = require('./questions.entity');

const addNewQuestion = function(questionData, done) {
    let question = new QuestionModel();

    question.label = questionData.label;
    question.image = questionData.image;
    question.topics = questionData.topics;
    // question.options = questionData.options;
    question.options = [];
    questionData.options.forEach((questionOption) => {
        question.options.push(questionOption);
    });
    question.correctOption = questionData.correctOption;
    question.difficulty = questionData.difficulty;
    question.analytics = {};
    question.analytics.ansTime = questionData.ansTime;
    question.analytics.correctness = questionData.correctness;
    question.analytics.askedCount = questionData.askedCount;
    question.analytics.lastAsked = questionData.lastAsked;

    question.save((err, savedQuestion) => {
        if(err) {
            console.error('Error Saving question:', question.label);
            done(err);
        } else {
            done(null, savedQuestion);
            return;
        }
    });
};


const getQuestions = function (params, done) {
        let query = {"code": params.topic},
        fieldOptions = null,
        page = 1,
        limit = params.count;

    QuestionModel
        .find(query)
        .sort({ "topic": -1})
        .select(fieldOptions)
        .skip((page > 0) ? limit * (page - 1) : 0)
        .limit(limit)
        .exec((err, colln) => {
            if (err) {
                console.error('Error in showing questions list, ERRORS::', err, ' queried  ', q);
                done(err);
                return;
            }
            done(null, colln);
        });
}


module.exports = {
    addNewQuestion
}