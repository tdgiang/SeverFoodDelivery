var express = require("express");
var router = express.Router();
var news = require("../../models/newModel");
var request = require("request");
var cheerio = require("cheerio");

router.get("/", function (req, res, next) {
  request("http://daotao.vnua.edu.vn/", (error, response, body) => {
    if (error) {
      console.log(error);

      news.find({}).exec((err, data) => {
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
    } else {
      $ = cheerio.load(body);
      var ds = $(body).find("a.TextTitle");
      let ListData = [];
      ds.each((i, e) => {
        if (e.children[0].children[0]) {
          if (e.children[2] && e.children[2].children) {
            ListData.push({
              title: e.children[0].children[0].data,
              link: e["attribs"]["href"],
              time: e.children[2].children[0].data,
              count: Math.floor(Math.random() * 1000),
            });
          } else {
            ListData.push({
              title: e.children[0].children[0].data,
              link: `http://daotao.vnua.edu.vn/${e["attribs"]["href"]}`,
              time: "25/07/2021",
              count: Math.floor(Math.random() * 1000),
            });
          }
        }
      });
      res.json({
        code: 200,
        data: ListData,
        message: "Lấy dữ liệu thành công",
      });
    }
  });
});

module.exports = router;
