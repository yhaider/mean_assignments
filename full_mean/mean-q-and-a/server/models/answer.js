const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const AnswerSchema = new mongoose.Schema({
	answer: {
		type: String,
		required: [true, "Please enter an answer."]
	},
    extra: {
        type: String,
        required: false
    },
    user: {
        type: Object,
        required: [true, "Please associate a user with this answer."]
    },
	likes: {
		type: Number,
		default: 0
	},
    _question: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question'
    }
}, {timestamps: true})
const Answer = mongoose.model('Answer', AnswerSchema)
