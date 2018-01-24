const stubService = require('./stub.service');
const StubModel = require('./stub.entity');

// addNewStub - call addNewStub method from stub service
const addNewStub = function(stubData, done) {
    let stub = new StubModel();

    stub.questionStub = stubData.questionStub;
    stub.correctResponse = stubData.correctResponse;
    stub.questionQuery = stubData.questionQuery;
    stub.topic = stubData.topic;
    stub.distractors.numberOfDistractors = parseInt(stubData.numberOfDistractors);
    stub.distractors.distractorQuery = stubData.distractorQuery;
    //Placeholder for distractor fields
    stub.distractors.distractorResponse = stubData.distractorResponse;

    stubService.addNewStub(stub, done);
};
// getStub -  call addNewStub method from stub service
const getStub = function(params, done) {
    stubService.getStub(params, done);
};

module.exports = {
    addNewStub,
    getStub
}