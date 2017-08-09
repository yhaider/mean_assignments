var mongoose = require("mongoose");

var NameSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},

})

// Our simple schema for each name in this project

mongoose.model("Name", NameSchema)
