const questionService = require('./questions.service');
const QuestionModel = require('./questions.entity');

const getQuestions = function (parameters, done) {
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
    questionData.analytics = questionData.analytics || {};
    question.analytics.ansTime = questionData.analytics.ansTime || question.analytics.ansTime;
    question.analytics.correctness = questionData.analytics.correctness || question.analytics.correctness;
    question.analytics.askedCount = questionData.analytics.askedCount || question.analytics.askedCount;
    question.analytics.lastAsked = questionData.analytics.lastAsked || question.analytics.lastAsked;

    questionService.addNewQuestion(question, done);
};

const addBulkQuestionFromStub = function(questionData, questionStub, done) {
    const questionLabels = questionData.length ? Object.keys(questionData[0]) : [];
    const formulateQuestionObjectFromStub = function(questionDataObj) {
        let questionData = {};
        const replacePlaceholders = function(key) {
            if(!key) {
                return;
            }
            let questionLabel = '';
            questionLabels.forEach((label) => {
                let reg = new RegExp('{{' + label + '}}', 'g');
                key = questionLabel = key.replace(reg, questionDataObj[label]);
            });
            return questionLabel;
        }
        questionData.label = replacePlaceholders(questionStub.questionStub);
        questionData.image = replacePlaceholders(questionStub.image);
        questionData.topics = questionStub.topics;
        questionData.correctOption = 1;
        questionData.options = [{
            "_id": 1,
            answer: replacePlaceholders(questionStub.correctResponse)
        }];

        return questionData;
    };
    let doneCount = 0;
    questionData.forEach((questionInst) => {
        addNewQuestion(formulateQuestionObjectFromStub(questionInst), (err, success) => {
            doneCount++;
            if(++doneCount == questionData.length) {
                done(null, questionData);
            }
        });
    });
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
    updateQuestionAnalytics,
    addBulkQuestionFromStub
};