const questionService = require('./questions.service');
const publishService = require('../../event-pubsub/publish');
const QuestionModel = require('./questions.entity');

const getQuestions = function (parameters, done) {
    publishService.onQuestionAdd(parameters);

    questionService.getQuestions(parameters, done);
};

const addNewQuestion = function(questionData, done) {
    let question = new QuestionModel();

    question.label = questionData.label;
    question.image = questionData.image;
    question.topics = questionData.topics;
    question.options = [];
    questionData.options.forEach((questionOption) => {
        question.options.push(questionOption);
    });
    question.correctOption = questionData.correctOption;
    question.difficulty = questionData.difficulty || question.difficulty;
    question.analytics.ansTime = questionData.analytics.ansTime || question.analytics.ansTime;
    question.analytics.correctness = questionData.analytics.correctness || question.analytics.correctness;
    question.analytics.askedCount = questionData.analytics.askedCount || question.analytics.askedCount;
    question.analytics.lastAsked = questionData.analytics.lastAsked || question.analytics.lastAsked;

    questionService.addNewQuestion(question, done);
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