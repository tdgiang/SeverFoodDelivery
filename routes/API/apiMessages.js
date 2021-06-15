var express = require("express");
var router = express.Router();
var messages = require("../../models/messagesModel");

router.get("/", function (req, res, next) {
  const { userID, toID } = req.query;
  messages
    .find({
      "user._id": [userID, toID],
      "to._id": [userID, toID],
    })
    .sort({ _id: -1 })
    .exec((err, data) => {
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
