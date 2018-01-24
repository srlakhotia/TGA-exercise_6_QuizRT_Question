var nrp = require('../pubsubConnection');


const onQuestionAdd = (data) => {
    nrp.emit("questions:addQuestion", data);
};

const onQuestionUpdate = (data) => {
    nrp.emit("question:updateQuestion", data);
};

/* This is for mock testing, when other microservices are not integrated.*/
const onQuestionAnalyticsUpdate = (data) => {
    nrp.emit("gameEngine:questionAttempted", data);
};

module.exports = {
    onQuestionAdd,
    onQuestionUpdate,
    onQuestionAnalyticsUpdate
};