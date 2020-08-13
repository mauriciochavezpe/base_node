const express = require('express');

var morgan = require('morgan')
const app = express();


const user = require('./routers/user.router');

app.use(express.json());
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(morgan('dev'));

app.use('/api/usuario/', user);


module.exports = app;