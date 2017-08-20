const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Connect to mongoose, Overwrite mpromise, mongoose's deprecated promise implementation
const DBNAME = "bicycle-marketplace"
mongoose.connect(`mongodb://localhost/${DBNAME}`)
// Here we connect our database!
// Because we are using the ang2starter program, all
// we have to do is update the DBNAME variable with a string
// and ensure we have the mongoose.connect line uncommented

if(DBNAME) console.log(`Connected to ${DBNAME}`);
else console.error("\x1b[31m%s\x1b[0m",`MONGOOSE STARTED \nBUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUT\n CONNECT TO THE DATABASE!`);
mongoose.Promise = global.Promise

let models_path = path.join(__dirname, './../models')
console.log(models_path);
fs.readdirSync(models_path).forEach(function (file) {
	if(file.indexOf('.js') >= 0){
		console.log(models_path+'/'+file);
		require(models_path+'/'+file)
	}
})
