var express = require('express');
var router = express.Router();
const foods=require('../models/foodModel');
const collections=require('../models/collectionsModel');
 
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
router.post('/addFood', function(req, res, next) {
  let {name,nameStore,price,rating,collection,bookmark,photo,address,description,range,images,popular}=req.body;
  let arrImg=images.split(',');
  let resultPopular;
  if(popular)
    resultPopular=true;
  else
    resultPopular=false
  let food=new foods({
    name,
    nameStore,
    price ,
    rating:parseFloat(rating),
    bookmark,
    photo,
    address,
    description,
    range:parseFloat(range),
    images:arrImg,
    popular:resultPopular
  })
  
  food.save(err=>{
    if(err)
      res.json({kq:0,mess:err})
    else{
      collections.findByIdAndUpdate(collection,{$push:{kids:food._id}},err=>{
        if(err)
          res.json({kq:0,mess:err})
        else
          res.redirect('./addFood');
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

router.post('/editFood', function(req, res, next) {
  let {id,name,nameStore,price,rating,collection,bookmark,photo,address,description,range,images,popular}=req.body;
  let resultPopular;
  if(popular)
    resultPopular=true;
  else
    resultPopular=false
  foods.findByIdAndUpdate(id,{
      name,
      nameStore,
      price ,
      rating:parseFloat(rating),
      bookmark,
      photo,
      address,
      description,
      range:parseFloat(range),
      images,
      popular:resultPopular
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
