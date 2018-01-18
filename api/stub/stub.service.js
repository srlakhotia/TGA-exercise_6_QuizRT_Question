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

const getStub = function(params, done) {
    let query = params || {};

    StubModel
        .find(query)
        .exec((err, colln) => {
            if (err) {
                console.error('Error in showing stubs list, ERRORS::', err, ' queried  ', query);
                done(err);
                return;
            }
            done(null, colln);
        });
};

module.exports = {
    addNewStub,
    getStub
};