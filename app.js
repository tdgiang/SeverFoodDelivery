var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var apiUsersRouter = require("./routes/API/apiUsers");
var apiNewsRouter = require("./routes/API/apiNews");
var apiScholarshipRouter = require("./routes/API/apiScholarships");
var apiHoatDongRouter = require("./routes/API/apiHoatDong");
var apiMessagesRouter = require("./routes/API/apiMessages");
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://tranducgiang:aWML2HcX33qhalVn@cluster0-afnwl.mongodb.net/FoodDelivery?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connect database success!");
    }
  }
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("/"));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/users", apiUsersRouter);
app.use("/api/news", apiNewsRouter);
app.use("/api/scholarships", apiScholarshipRouter);
app.use("/api/hoatdongs", apiHoatDongRouter);
app.use("/api/messages", apiMessagesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening `);
});

app.listen(3000, () => {
  console.log(`Example app listening `);
});

io.on("connection", (socket) => {
  console.log("Vua co nguoi ket noi " + socket);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
