var express = require('express');
var router = express.Router();
var collections=require('../../models/collectionsModel');
var foodModel=require('../../models/foodModel');


router.get('/', function(req, res, next) {
    collections.find({},(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.json(data);
    })
    
});
router.get('/foods', function(req, res, next) {
    collections.aggregate([{
        $lookup:{
            from:'foods',
            localField:'kids',
            foreignField:'_id',
            as:"children"
        }
    }],(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.json(data)
    })
    
});



module.exports=router;