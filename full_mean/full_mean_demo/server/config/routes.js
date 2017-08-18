const path = require('path');

module.exports = function(app){
    app.get('*', (req, res) => {
        res.sendFile(path.resolve('ang-full-mean', 'dist', 'index.html'))
    })
}
