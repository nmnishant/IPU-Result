const express = require('express');
const morgan = require('morgan');

// Express routers
const studentRouter = require('./routes/studentRouter');
const rootRouter = require('./routes/rootRouter');

// Express middlewares
const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());

// Handling route
app.use('/api/v1/students', studentRouter);
app.use('/', rootRouter);

module.exports = app;