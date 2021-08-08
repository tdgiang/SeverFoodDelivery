var express = require("express");
var router = express.Router();
var request = require("request");
var cheerio = require("cheerio");

router.get("/", function (req, res, next) {
  request("https://www.topcv.vn/viec-lam-tot-nhat", (error, response, body) => {
    if (error) {
      console.log(error);
      res.json({
        code: 200,
        data: [],
        message: "Lấy dữ liệu thành công",
      });
    } else {
      let data = [];
      $ = cheerio.load(body);
      var ds = $(body).find(`.row.job`);
      ds.each((i, e) => {
        if (
          e.children[1].children[1].children[1] &&
          e.children[3].children[1] &&
          e.children[3].children[1].children[1] &&
          e.children[3].children[3] &&
          e.children[3].children[5]
        ) {
          data.push({
            img: e.children[1].children[1].children[1].attribs["data-src"],
            link: e.children[1].children[1].attribs["href"],
            title:
              e.children[3].children[1].children[1].children[1].children[0]
                .data,
            address: e.children[3].children[5].children[3].children[0].data,
            company:
              e.children[3].children[3].children[1].children[1].attribs[
                "title"
              ],
          });
        }
      });

      res.json({
        code: 200,
        data: data,
        message: "Lấy dữ liệu thành công",
      });
    }
  });
});

module.exports = router;
