var express = require("express");
var router = express.Router();
const users = require("../models/userModel");
/* GET users listing. */

router.get("/", function (req, res, next) {
  users.find({}, (err, data) => {
    if (err) res.json({ kq: 0, mess: err });
    else res.render("users/listUsers.ejs", { data });
  });
});



router.get("/deleteuser/:id", function (req, res, next) {
  users.findByIdAndRemove(req.params.id, (err) => {
    if (err) res.json({ kq: 0, mess: err });
    else res.redirect("/users");
  });
});



module.exports = router;
