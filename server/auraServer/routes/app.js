const express = require('express');
const app = express();

const productRouter = require('./product');

app.use("/product",productRouter)


module.exports = app;