var users = require('../controllers/users.js');

module.exports = function(app){
    app.get('/', users.index);
    // Displays login and registration page
    app.post('/register', users.add);
    // Adds a new user to the database,
    // providing all validations are passed
    app.get('/home', users.home);
    // After logging in or registering this
    // is what shows
    app.get('/logout', users.logout);
    // Logs the user out
    app.post('/login', users.login);
    // Logs user in by comparing password
    // with password in database
}
