var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
require('./db');

var loginRouter = require('./routes/login');
var patchRouter = require('./routes/patch');
var resizeRouter = require('./routes/resize');
var addressRouter = require('./routes/address');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', loginRouter);
app.use('/patch', patchRouter);
app.use('/resize', resizeRouter);
app.use('/address', addressRouter);

module.exports = app;
