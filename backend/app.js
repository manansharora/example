var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var stocksRouter = require('./routes/stocks');

var getData = require('./lib/reader.js');
var fsm = require('./lib/fsm.js');

var app = express();

const data = getData();

data.forEach((d) => fsm.appendData(d));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/stocks', stocksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // render the error response
  res.status(err.status || 500).json({ error: true, message: err.message })
});

module.exports = app;
