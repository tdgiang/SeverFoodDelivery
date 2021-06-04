const mongoose = require("mongoose");
var Schema = require("mongoose").Schema,
  ObjectId = Schema.ObjectId;

var scholarshipSchema = new Schema({
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
  type: {
    type: Number,
  },
});
module.exports = mongoose.model("scholarships", scholarshipSchema);
