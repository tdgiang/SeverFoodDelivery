const express=require('express');
const router=express.Router();
const users=require('../../models/userModel');

router.get('/', function(req, res, next) {
    users.find({},(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.json({kq:1,data})
    })
});
router.post('/login', function(req, res, next) {
    users.findOne({userName:req.body.userName,passWord:req.body.passWord},(err,data)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.json({kq:1,user:data})
    })
});
router.post('/edit', function(req, res, next) {
    const {userName,dateOfBirth,gender,name,phone,address}=req.body;
   users.findOneAndUpdate({userName:userName},{dateOfBirth:dateOfBirth,phone:phone,gender:gender,name:name,address:address},(err,user)=>{
       if(err)
            res.json({kq:0,mess:err})
        else
            res.json({kq:1,user})
   })
});
router.post('/', function(req, res, next) {
    const {userName,passWord,name,phone,address}=req.body;
    let user=new users({
        userName,
        passWord,
        name,
        phone,
        address
    })
    user.save((err,user)=>{
        if(err)
            res.json({kq:0,mess:err})
        else
            res.json({kq:1,user})
    })

});


module.exports =router;