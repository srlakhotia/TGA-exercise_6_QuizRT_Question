var nrp = require('../pubsubConnection');


const onQuestionAdd = (data) => {
    nrp.emit("questions:addQuestion", data);
};

const onQuestionUpdate = (data) => {
    nrp.emit("question:updateQuestion", data);
};

module.exports = {
    onQuestionAdd,
    onQuestionUpdate
};