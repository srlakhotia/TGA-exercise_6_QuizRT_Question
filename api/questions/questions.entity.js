const mongoose = require('mongoose');
const lod = ["easy", "medium", "hard"];

let schema = new mongoose.Schema({
    label: { type: String, required: true },
    image: { type: String, default: null },
    topics: [ {type: String} ],
    options: [{
        _id: { type: Number, required: true },
        answer: { type: String, required: true }
    }],
    correctOption: { type: Number, required: true },
    difficulty: { type: String, enum: lod, default: "medium" },
    analytics: {
        ansTime: { type: Number, default: 0 },
        correctness: { type: Number, min: 0, max: 100, default: 100 },
        askedCount: { type: Number, default: 0 },
        lastAsked: { type: Date, default: null }
    }
}, { collection: 'questions' });


module.exports = mongoose.model('questions', schema);