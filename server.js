const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Dot env configuration
dotenv.config({path: './config.env'});

// Connect mongoose server
mongoose.connect(process.env.DBString).then(function() {
    console.log('Database connected');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});