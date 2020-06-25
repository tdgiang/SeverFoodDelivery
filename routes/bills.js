var express = require('express');
var router = express.Router();
const bills=require('../models/billsModel');

 
/* GET home page. */
router.get('/', function(req, res, next) {
    bills.find({status:2},(err,data)=>{
      if(err)
        res.json({kq:0,mess:err})
      else
      {
        res.render('bills/index',{data});
        
      }
        
    })
});

router.get('/history', function(req, res, next) {
    bills.find({status:4},(err,data)=>{
      if(err)
        res.json({kq:0,mess:err})
      else
        res.render('bills/historybill',{data})
    })
});


router.get('/deletebill/:id', function(req, res, next) {
  
  bills.findByIdAndRemove(req.params.id,err=>{
    if(err)
      res.json({kq:0,mess:err})
    else
    res.redirect('/bills');
  })

});
module.exports = router;
