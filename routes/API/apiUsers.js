const express = require("express");
const router = express.Router();
const users = require("../../models/userModel");
const Clazz = require("../../models/classModel");
const deparments = require("../../models/departmentModel");
var validator = require("validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/student-login", async function (req, res, next) {
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
    .findOne({ id_St })
    .populate("class")
    .populate("department")
    .exec((err, data) => {
      if (err) {
        res.json({
          code: 400,
          message: "Sai thông tin đăng nhập",
        });
      } else {
        if (data) {
          bcrypt.compare(password, data.password, function (err, result) {
            if (result) {
              res.json({
                code: 200,
                data,
                message: "Lấy dữ liệu thành công",
              });
            } else {
              res.json({
                code: 200,
                message: "Mật khẩu không chính xác!",
                data: null,
              });
            }
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

router.post("/change-password", async function (req, res, next) {
  const { id_St, old_Password, newPassword } = req.body;

  const passHash = await bcrypt.hash(newPassword, saltRounds);

  if (validator.isEmpty(id_St))
    res.json({
      code: 400,
      message: "Truyền thiếu tham số",
    });
  if (validator.isEmpty(old_Password))
    res.json({
      code: 400,
      message: "Truyền thiếu tham số",
    });
  if (validator.isEmpty(newPassword))
    res.json({
      code: 400,
      message: "Truyền thiếu tham số",
    });
  users
    .updateOne({ id_St, old_Password }, { password: passHash })
    .exec((err, data) => {
      if (err) {
        res.json({
          code: 400,
          message: "Thay đổi mật khẩu thất bại!",
        });
      } else {
        if (data) {
          res.json({
            code: 200,
            data,
            message: "Thay đổi mật khẩu thành công!",
          });
        } else {
          res.json({
            code: 200,
            message: "Thay đổi mật khẩu thất bại!",
            data: null,
          });
        }
      }
    });
});

router.get("/get-list-users", function (req, res, next) {
  const { id } = req.query;
  users
    .find({})
    .populate("class")
    .populate("department")
    .exec((err, data) => {
      if (err) {
        res.json({
          code: 400,
          message: "Sai thông tin đăng nhập",
        });
      } else {
        if (data) {
          const newList = data.filter((e) => e.id_St != id);

          res.json({
            code: 200,
            data: newList,
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
