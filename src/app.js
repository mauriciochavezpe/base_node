const express = require('express');

var morgan = require('morgan')
const app = express();

// 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
const user = require('./routers/user.router');

app.use(express.json());
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(morgan('dev'));

app.use('/api', user);


module.exports = app;