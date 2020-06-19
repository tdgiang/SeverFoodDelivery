var express = require('express');
var router = express.Router();
var collections=require('../models/collectionsModel');
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/collections')
    },
    filename: function (req, file, cb) {
      cb(null,Date.now() + '-'+ file.originalname)
    }
  })
  
var upload = multer({ storage: storage })
/* GET home page. */
router.get('/', function(req, res, next) {
    collections.find({},(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.render('collections/listCollections',{data});
    })
    
});


router.get('/addCollection', function(req, res, next) {
    res.render('collections/addCollection');
});

router.post('/addCollection',upload.single('img'), function(req, res, next) {
   let coll =new collections({
       name:req.body.name,
       order:req.body.order,
       img:req.file.path.slice(6)
   })
   coll.save(err=>{
       if(err)
            res.json({kq:0,mess:err})
        else
            res.redirect('./');

   })
   
});


router.get('/editCollection/:id', function(req, res, next) {
    collections.findById(req.params.id,(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.render('collections/editCollection',{data});
    })
});
router.post('/editCollection',upload.single('img'), function(req, res, next) {
    collections.findByIdAndUpdate(req.body.id,{
       name:req.body.name,
       order:req.body.order,
       img:req.file.path.slice(6)
    },err=>{
        if(err)
            res.json({kq:0,mess:err});
        else
            res.redirect('/collections');
    })
});


router.get('/deleteCollection/:id', function(req, res, next) {
    collections.findByIdAndRemove(req.params.id,err=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.redirect('/collections')
    })
});






module.exports = router;
