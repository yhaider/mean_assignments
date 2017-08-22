const mongoose = require('mongoose');
const Question = mongoose.model('Question');

module.exports = {
    index: function (req, res) {
        Question.find({}, (err, questions) =>{
            if(err){
                return res.status(500).json(err);
            }
            return res.json(questions)
        })
    },
    // This grabs all of the questions in the database

    add: function (req, res) {
        let question = new Question(req.body);
        question.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(question);
        });
    },

    showOne: function (req, res) {
        Question.findOne({_id: req.params.id}, (err, question) => {
            if(err) {
                return res.status(500).json(err)
            }
            return res.json(question)
        })
    }
}
