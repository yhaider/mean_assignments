var mongoose = require("mongoose");

var WolfSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    status: {type: String, required: true, minlength: 2},
    age: {type: Number, required: true, maxlength: 2},
    gender: {type: String, required: true, minlength: 4},
    color: {type: String, required: true, minlength: 3},
})

mongoose.model("Wolf", WolfSchema)
