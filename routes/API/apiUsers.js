const express = require("express");
const router = express.Router();
const users = require("../../models/userModel");
const Clazz = require("../../models/classModel");
const deparments = require("../../models/departmentModel");
var validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/student-login", function (req, res, next) {
  const { id_St, password } = req.body;

  if (validator.isEmpty(id_St))
    res.json({
      code: 400,
      message: "Truyền thiếu tham số",
    });
  if (validator.isEmpty(password))
    res.json({
      code: 400,
      message: "Truyền thiếu tham số",
    });
  users
    .findOne({ id_St, password })
    .populate("class")
    .populate("department")
    .exec((err, data) => {
      console.log(err);
      if (err) {
        res.json({
          code: 400,
          message: "Sai thông tin đăng nhập",
        });
      } else {
        if (data) {
          res.json({
            code: 200,
            data,
            message: "Lấy dữ liệu thành công",
          });
        } else {
          res.json({
            code: 200,
            message: "Sai thông tin đăng nhập",
            data: null,
          });
        }
      }
    });
});

module.exports = router;
