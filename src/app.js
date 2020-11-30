const express = require('express');
const router = require('./api/routers/router');
const app = express();

app.use(express.json())
app.use("/api", router);


module.exports = app;

