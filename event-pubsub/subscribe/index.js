const connection = require('../pubsubConnection');
const questionsController = require('../../api/questions/questions.controller');

/**
 * Game Engine subscriptions
 */
connection.on('gameEngine:questionAttempted', (data, channel) => {
    //update question analytics along with difficulty level
    //need to know what data gameEngine produces
    questionsController.updateQuestionAnalytics(data);

});


// test our own publish methods, we dont need them.
connection.on('questions:*', (data, channel) => {
    console.log(data);
});


