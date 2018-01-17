const mongoose = require('mongoose');
const lod = ["easy", "medium", "hard"];

let schema = new mongoose.Schema({
    label: { type: String, required: true },
    image: { type: String, default: null },
    topics: [ {type: String} ],
    options: [{
        _id: { type: Number, required: true },
        text: { type: String, required: true }
    }],
    correctOption: Number,
    lod: { type: String, required: true, enum: lod, default: "medium" },
    analytics: {
        ansTime: { type: Number, required: true },
        correctness: { type: Number, required: true, min: 0, max: 100, default: 100 },
        askedCount: { type: Number, required: true, default: 0 },
        lastAsked: { type: Date, default: null }
    }
}, { collection: 'questions' });


module.exports = mongoose.model('questions', schema);