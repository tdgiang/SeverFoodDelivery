var express = require('express');
var router = express.Router();
const foods=require('../models/foodModel');
const collections=require('../models/collectionsModel');
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
    foods.find({},(err,data)=>{
      if(err)
        res.json({kq:0,mess:err})
      else
        res.render('food/listFood',{data})
    })
});


router.get('/addFood', function(req, res, next) {
  collections.find((err,data)=>{
    if(err)
      res.json({kq:0,mess:err})
    else
    res.render('food/addFood',{data});
  })
  
});

router.post('/addFood',upload.single('img'), function(req, res, next) {
  let {name,nameStore,price,rating,collection,bookmark,photo,address,description}=req.body;
  let food=new foods({
    name,
    nameStore,
    price ,
    rating,
    bookmark,
    photo,
    address,
    description,
    img:req.file.path.slice(6)
  })
  
  food.save(err=>{
    if(err)
      res.json({kq:0,mess:err})
    else{
      collections.findByIdAndUpdate(collection,{$push:{kids:food._id}},err=>{
        if(err)
          res.json({kq:0,mess:err})
        else
          res.redirect('/foods');
      })
    }
  })


});


router.get('/deleteFood/:id', function(req, res, next) {
  
  foods.findByIdAndRemove(req.params.id,err=>{
    if(err)
      res.json({kq:0,mess:err})
    else
    res.redirect('/foods');
  })

});

router.get('/editFood/:id', function(req, res, next) {
  
  foods.findById(req.params.id,(err,data)=>{
    if(err)
      res.json({kq:0,mess:err});
    else
    {
      collections.find({},(err,dataListFood)=>{
        if(err)
          res.json({kq:0,mess:err})
        else
          res.render('food/editFood',{data,dataListFood});
      })

    }
      
  })



});

router.post('/editFood',upload.single('img'), function(req, res, next) {
  let {id,name,nameStore,price,rating,collection,bookmark,photo,address,description}=req.body;
  console.log(id);
  foods.findByIdAndUpdate(id,{
      name,
      nameStore,
      price ,
      rating,
      bookmark,
      photo,
      address,
      description,
      img:req.file.path.slice(6)
  },err=>{
    if(err)
      res.json({kq:0,mess:err})
    else{
      collections.findOne({kids:{$all:[id]}},(err,data)=>{
        if(err)
          res.json({kq:0,mess:err})
        else
          {
            if(collection==data._id)
            {
              res.redirect('/foods');  
            }else
            {
            collections.findByIdAndUpdate(data._id,{$pull:{kids:id}},err=>{
              if(err)
                res.json({kq:0,mess:err})
              else
                {
                  collections.findByIdAndUpdate(collection,{$push:{kids:id}},err=>{
                    if(err)
                      res.json({kq:0,mess:err})
                    else
                      res.redirect('/foods');  
                  })
                }
            })
            }
          }
      })
    }
      
  })
 
});



module.exports = router;
