var express = require("express");
var router = express.Router();
var hoatdongs = require("../../models/hoatdongModel");

router.get("/", function (req, res, next) {
  hoatdongs.find({}).exec((err, data) => {
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
  });
});

module.exports = router;
