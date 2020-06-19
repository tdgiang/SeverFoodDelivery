var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var billRouter = require('./routes/bills');
var foodsRouter = require('./routes/foods');
var apifoodsRouter = require('./routes/API/apiFoods');
var collectionsRouter = require('./routes/collections');
var apiCollectionsRouter = require('./routes/API/apiCollections');
var apiUsersRouter = require('./routes/API/apiUsers');
var apiBillsRouter = require('./routes/API/apiBills');

var app = express();

mongoose.connect('mongodb+srv://test:3ewAfrnPp7t4F1c8@cluster0-afnwl.mongodb.net/FoodDelivery?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false},(err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("Connect database success!");
  }
});
 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('/'));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/foods', foodsRouter);
app.use('/bills', billRouter);
app.use('/collections', collectionsRouter);
app.use('/apifoods', apifoodsRouter);
app.use('/apicollections', apiCollectionsRouter);
app.use('/apiusers',apiUsersRouter );
app.use('/apibills',apiBillsRouter );

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
