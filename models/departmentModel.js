const mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var departmentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  acronym: {
    type: String,
  },
  status: {
    type: Number,
  },
  dateStart: {
    type: Date,
  },
  department: {
    type: ObjectId,
  },
});
module.exports = mongoose.model("departments", departmentSchema);
