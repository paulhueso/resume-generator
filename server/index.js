var createError = require('http-errors');
var express = require('express');
var session = require('express-session')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
const cors = require('cors');

var database = require('./src/config/database')
const MongoStore = require('connect-mongo')(session);


//routes
let usersRouter = require('./src/routes/user.routes.js');
let cvsRouter = require('./src/routes/cv.routes.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true
}

app.use(cors(corsOptions));


app.use(session({
  secret: 'secret of our project',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ url: 'mongodb://localhost:27017/resume-generator'}),
  cookie:{
    maxAge: 1000* 60 * 60 //One hour = 1000 ms * 60 * 60
  }
}))

app.use('/', usersRouter);
app.use('/', cvsRouter);

app.listen(3000, () => console.log(`Hello world app listening on port 3000!`))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;