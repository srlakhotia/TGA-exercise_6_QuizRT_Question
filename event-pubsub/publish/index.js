var nrp = require('../pubsubConnection');


const onQuestionAdd = (data) => {
    nrp.emit("questions:addQuestion", data);
};

const onQuestionUpdate = (data) => {
    nrp.emit("question:updateQuestion", data);
};

/* This is for mock testing, when other microservices are not integrated.*/
const onQuestionAnalyticsUpdate = (data) => {
    console.log("++++++++++",nrp);
    nrp.emit("question:updateAnalytics", data);
};

module.exports = {
    onQuestionAdd,
    onQuestionUpdate,
    onQuestionAnalyticsUpdate
};