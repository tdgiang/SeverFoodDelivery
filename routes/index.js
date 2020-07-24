var express = require('express');
var router = express.Router();
var user=require('../models/userModel');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
/* login home page. */
router.post('/', function(req, res, next) {
  user.findOne({userName:req.body.email,passWord:req.body.password,author:1},(err,data)=>{
    if(err){
      res.redirect('/');
    }else{
      if(data){
        res.redirect('/bills')
      }else{
        res.redirect('/');
         
      }
      
    }
  })

});


 






module.exports = router;
