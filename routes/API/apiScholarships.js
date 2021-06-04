var express = require("express");
var router = express.Router();
var scholarships = require("../../models/scholarshipModel");

router.get("/", function (req, res, next) {
  scholarships.find({}).exec((err, data) => {
    console.log(err);
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
