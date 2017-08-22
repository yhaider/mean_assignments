const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const QuestionSchema = new mongoose.Schema({
	question: {
		type: String,
		required: [true, "Please enter a question."]
	},
    description: {
        type: String,
        required: false
    },
    user: {
        type: String,
        required: false
    },
	answernum: {
		type: Number,
		required: true,
		default: 0
	},
    _answers: {
        type: Schema.Types.ObjectId,
        ref: 'Answer',
		default: []
    }
}, {timestamps: true})
const Question = mongoose.model('Question', QuestionSchema)
