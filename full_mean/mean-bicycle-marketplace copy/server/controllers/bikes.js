const mongoose = require('mongoose');
const Bike = mongoose.model('Bike');
// This enables the mongoose Bike model
// created in our models dir in our bike.js

module.exports = {
    create(req, res){
        let bike = new Bike(req.body);
        bike.save((err) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(bike);
        });
    },
    // This method creates a new bike and adds to the database

    index(req, res){
        Bike.find({}, (err, bikes) => {
            if(err){
                return res.status(500).json(err);
            }
            return res.json(bikes);
        })
    },
    // This method simply grabs all of the bikes in the database

    update(req, res){
        Bike.findOneAndUpdate({_id: req.params.id}, req.body, (err, bike) => {
            if(err){
                return res.status(400).json(err);
            }
            return res.json(bike)
        })
    },
    // This method updates one bike in the database that matches the
    // id in the route params
    // Incredibly important to use .findOneAndUpdate because otherwise it
    // will return a dict in an arr

    delete(req, res){
        Bike.findByIdAndRemove({_id: req.params.id}, (err, bike) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json({message: 'successful delete'});
        })
    }
    // This method will delete one bike based on the route params id
    // and again, incredibly important to use .findByIdAndRemove because
    // otherwise it will return a dict in an arr
}

// All methods above deal with if there are errors when performing these
// tasks as well
