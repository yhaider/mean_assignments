var wolves = require('../controllers/wolves.js');

module.exports = function(app){
    app.get('/', wolves.index);
    // Display the dashboard of all wolves
    app.get('/:id', wolves.identify);
    // Show an individual wolf's attributes
    app.get('/new', wolves.new);
    // Form to add a new wolf
    app.post('/wolves', wolves.process_add);
    // Adds new wolf to database
    app.get('/edit/:id', wolves.edit);
    // Form to edit a wolf's information
    app.post('/wolves/:id', wolves.process_edit);
    // Edits wolf's information in database
    app.post('/destroy/:id', wolves.process_destroy);
    // Removes the wolf with the corresponding
    // ID from the base
}
