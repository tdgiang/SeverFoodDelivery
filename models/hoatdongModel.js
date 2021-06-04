const mongoose = require("mongoose");
var Schema = require("mongoose").Schema,
  ObjectId = Schema.ObjectId;

var hoatdongSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
  },
  type: {
    type: Number,
  },
  link: {
    type: String,
  },
});
module.exports = mongoose.model("hoatdongs", hoatdongSchema);
