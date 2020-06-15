const mongoose=require('mongoose');

var userSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    passWord:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    dateOfBirth:{
        type:String,
    },
    address:{
        type:String
    },
    gender:{
        type:{
            type:String,
            enum:['male','female']
        }
    },
    img:{
        type:String
    },
    createDay:{
        type:Date,
        default:Date.now
    }

})
module.exports=mongoose.model('users',userSchema);