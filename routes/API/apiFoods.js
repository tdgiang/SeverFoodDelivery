var express = require('express');
var router = express.Router();
const foods=require('../../models/foodModel');

router.get('/', function(req, res, next) {
    foods.find({},(err,data)=>{
      if(err)
        res.json({kq:0,mess:err})
      else
        res.json(data);
    })
});



module.exports=router;