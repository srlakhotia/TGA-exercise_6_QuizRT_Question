const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    questionStub: { type: String, required: true },
    correctResponse: { type: String, required: true },
    questionQuery: { type: String, required: true },
    topic: { type: String, required: true },
    distractors: {
        numberOfDistractors: { type: Number, min: 1, default: 3 },
        distractorQuery: { type: String, required: true },
        distractorResponse: { type: String }
    }
}, {collection: 'stubs'});

module.exports = mongoose.model('stubs', schema);