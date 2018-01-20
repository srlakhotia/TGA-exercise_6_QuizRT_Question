const connection = require('../pubsubConnection');

/**
 * Game Engine subscriptions
 */
connection.on('gameEngine:questionAttemped', (data, channel) => {
    //update question analytics along with difficulty level
    //need to know what data gameEngine produces
});


// test our own publish methods, we dont need them.
connection.on('questions:*', (data, channel) => {
    console.log(data);
});


