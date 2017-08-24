const mongoose = require('mongoose');
const Poll = mongoose.model('Poll');
const Option = mongoose.model('Option')

module.exports = {

    get: function (req, res) {
        Poll.find({}, (err, polls) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(polls);
        })
    },
    // This method grabs all the polls and sends them off

    create: function (req, res) {
        var newPoll = new Poll({question: req.body.question, creator: req.body.creator});
        newPoll.save((err) => {
            if(err){
                console.log("There was an error in saving your new poll.")
                return res.status(500).json(err);
            }
        });
        var newOptionOne = new Option({option: req.body.optionone, likes: 0});
        newOptionOne._poll = newPoll._id;
        newOptionOne.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });
        var newOptionTwo = new Option({option: req.body.optiontwo, likes: 0});
        newOptionTwo._poll = newPoll._id;
        newOptionTwo.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });

        var newOptionThree = new Option({option: req.body.optionthree, likes: 0});
        newOptionThree._poll = newPoll._id;
        newOptionThree.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });
        var newOptionFour = new Option({option: req.body.optionfour, likes: 0});
        newOptionFour._poll = newPoll._id;
        newOptionFour.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
        });
        return res.json("All clear!")
    },
    // This create method first makes the new poll, and then
    // makes each individual option. It uses the new poll's id
    // in each option so we can grab the options associated with a particular
    // poll


    delete: function (req, res) {
        Poll.remove({_id: req.params.id}, (err) => {
            if(err) {
                return res.status(500).json(err);
            }
        })
        return res.json("Deleted!")
    },
    // This removes the poll whose id has been passed
    // into the route parameter

    getOptions: function (req, res) {
        Option.find({_poll: req.params.id}, (err, options) => {
            if(err) {
                return res.status(401).json(err);
            }
            return res.json(options);
        })
    },
    // This grabs all of the options associated with a particular
    // poll and sends that data off!

    getPoll: function (req, res) {
        Poll.findOne({_id: req.params.id}, (err, poll) => {
            if(err) {
                return res.status(401).json(err);
            }
            return res.json(poll);
        })
    },
    // This gets the poll whose id is in the route parameter
    // and sends that poll off!

    vote: function (req, res) {
        Option.update({_id: req.body._id},{$inc: {likes: 1}}, (err) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json("yay, i voted!")
        })
    },
    // This finds the option whose id matches that in the route
    // parameter and then increments the like by 1

    getOption: function (req, res) {
        Option.findOne({_id: req.params.id}, (err, option) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(option)
        })
    }
    // This grabs one option whose id matches the id
    // in the route parameter and sends that option's info off!
}
