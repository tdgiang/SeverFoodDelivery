const mongoose = require("mongoose");
var Schema = require("mongoose").Schema,
  ObjectId = Schema.ObjectId;

var newSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
  },
  count: {
    type: Number,
  },
  link: {
    type: String,
  },
});
module.exports = mongoose.model("news", newSchema);
