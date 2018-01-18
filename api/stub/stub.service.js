const StubModel = require('./stub.entity');

const addNewStub = function(stubInstance, done) {
    stubInstance.save((err, stubResponse) => {
        if(err) {
            consose.error('Error saving stub: ', stub.questionStub);
            done(err);
        } else {
            done(null, stubResponse);
            return;
        }
    });
};

module.exports = {
    addNewStub
};