var express = require('express');
var router = express.Router();
var bills=require('../../models/billsModel');

router.get('/', function(req, res, next) {
    bills.find({},(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.json(data);
    })
   
});


router.post('/', function(req, res, next) {
    const {user,contact,arrFoods,total,cardPayMethod}=req.body;
    let bill =new bills({
        user,
        contact,
        arrFoods,
        total,
        cardPayMethod
    });
    bill.save((err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.json({kq:1,data})
    })


});
router.put('/', function(req, res, next) {
    const {id}=req.body;
    bills.findByIdAndUpdate(id,{status:4},(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
        res.json({kq:1,data})
    })
});

module.exports=router;