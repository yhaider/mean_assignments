var mongoose = require("mongoose");

var NameSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},

})

mongoose.model("Name", NameSchema)
