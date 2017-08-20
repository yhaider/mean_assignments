const mongoose = require('mongoose');

var BikeSchema = new mongoose.Schema({
// Here we name our schema

    title: {
        type: String,
        required: [true, "Please make sure to add a title."]
    },
    // Each attribute has a title, and then specifies a type,
    // and any other validations too
    // Each validation can include a message so if that
    // validation is not fulfilled, then the user can find out
    // why their request did not go through

    price: {
        type: Number,
        required: [true, "Please make sure to add a price."],
        min: [1, "Price must be at least $1."]
    },
    location: {
        type: String,
        required: [true, "Please make sure to add a location"]
    },
    description: {
        type: String,
        required: [true, "Please make sure to add a description."],
        maxLength: [200, "Description cannot exceed 200 characters."]
    }
})

mongoose.model('Bike', BikeSchema);
// Need to name the model
