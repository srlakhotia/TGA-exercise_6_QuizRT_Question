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

const formulateQuestionObjectFromStub = function(questionDataObj, questionStub, questionLabels) {
    let question = {};

    const replacePlaceholders = function(key, ind) {
        if(!key) {
            return;
        }
        let questionLabel = '';
        questionLabels.forEach((label) => {
            let reg = new RegExp('{{' + label + '}}', 'g');
            if(questionDataObj[label]) {
                key = questionLabel = key.replace(reg, (questionDataObj[label] ? questionDataObj[label].label : ''));
            } else if(questionDataObj.falseOptions && questionDataObj.falseOptions[ind]){
                key = questionLabel = key.replace(reg, (questionDataObj.falseOptions[ind][label] ? questionDataObj.falseOptions[ind][label].label : ''));
            }
        });
        return questionLabel;
    }
    question.label = replacePlaceholders(questionStub.questionStub);
    question.image = replacePlaceholders(questionStub.image);
    question.topic = questionStub.topic;
    question.correctOption = 1;
    question.options = [{
        "_id": 1,
        "answer": replacePlaceholders(questionStub.correctResponse)
    }, {
        "_id": 2,
        "answer": replacePlaceholders(questionStub.distractors.distractorResponse, 0)
    }, {
        "_id": 3,
        "answer": replacePlaceholders(questionStub.distractors.distractorResponse, 1)
    }, {
        "_id": 4,
        "answer": replacePlaceholders(questionStub.distractors.distractorResponse, 2)
    }];

    return question;
};
        
const addBulkQuestionFromStub = function(questionData, questionStub, done) {
    let doneCount = 0;
    let questionLabels = questionData.length ? Object.keys(questionData[0]) : [];
    questionLabels.push(...Object.keys(questionData[0].falseOptions[0]));
    questionLabels.splice(questionLabels.indexOf('falseOptions'), 1);

    questionData.forEach((questionInst) => {
        addNewQuestion(formulateQuestionObjectFromStub(questionInst, questionStub, questionLabels), (err, success) => {
            if(++doneCount == questionData.length) {
                done(null, questionData);
            }
        });
    });
};

const updateQuestion = (params, done) => {
    return done(null, parameters);
};

/**
 * Data should be
 * @param data <object>
 */
const updateQuestionAnalytics = (data) => {

};

module.exports = {
    getQuestions,
    addNewQuestion,
    updateQuestion,
    updateQuestionAnalytics,
    addBulkQuestionFromStub
};