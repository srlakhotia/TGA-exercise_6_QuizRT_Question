const questionService = require('./questions.service');
const publishService = require('../../event-pubsub/publish');

const getQuestions = function (parameters, done) {
    //questionService.getQuestions(parameters, done);

    publishService.onQuestionAdd(parameters);
    return done(null, parameters);
    //return "question.controllers: You are here";

};

const addNewQuestion = function(questionData, done) {
    questionService.addNewQuestion(questionData, done);
};

const updateQuestion = (params, done) => {
    return done(null, parameters);
};

const updateQuestionAnalytics = (params, done) => {
    return done(null, parameters);
};

module.exports = {
    getQuestions,
    addNewQuestion,
    updateQuestion,
    updateQuestionAnalytics
};