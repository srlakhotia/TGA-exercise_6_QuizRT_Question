const questionService = require('./questions.service');
const getQuestions = function (parameters, done) {
    //questionService.getQuestions(parameters, done);
    return done(null, parameters);
    //return "question.controllers: You are here";

};

const addNewQuestion = function() {

};

module.exports = {
    getQuestions,
    addNewQuestion
}