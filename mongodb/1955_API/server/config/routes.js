var names = require('../controllers/names.js');

module.exports = function(app){
    app.get('/', names.index);
    // Display all names of people born in 1955
    app.get('/new/:name', names.add);
    // Adds that name to the database
    app.get('/remove/:name', names.remove);
    // Removes that name from the database
    app.get('/:name', names.show);
    // Shows just that name
}
