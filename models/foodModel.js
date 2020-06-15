const mongoose = require('mongoose');

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    createDay:{
        type:Date,
        default:Date.now
    },
    img:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number
    },
    bookmark:{
    type:Number
    },
    photo:{
        type:Number
    },
    address:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    status:{
        type:{
            type:String,
            enum:['available','unavailable']
        },
        default:['available']
    },
    nameStore:{
        type:String
    },
    popular:{
        type:Boolean,
        default:false
    },
    range:{
        type:Number,
        required:true
    },
    images:{
        type:[{type:String}],
        required:true
    }


})

module.exports =mongoose.model('foods',foodSchema);