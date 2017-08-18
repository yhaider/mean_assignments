const express = require('express');
const bP = require('body-parser');
const app = express();
const path = require('path');

app.use(bP.json());
app.use(express.static(path.resolve('public', 'dist')));

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, () => {
    console.log('Listening on port 8000...')
})
