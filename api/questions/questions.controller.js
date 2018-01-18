const questionService = require('./questions.service');
const getQuestions = function (parameters, done) {
    //questionService.getQuestions(parameters, done);
    return done(null, parameters);
    //return "question.controllers: You are here";

};

const addNewQuestion = (params, done) => {
    return done(null, parameters);
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