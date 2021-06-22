const mongoose = require("mongoose");
var Schema = require("mongoose").Schema,
  ObjectId = Schema.ObjectId;

var userSchema = new Schema({
  id_St: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  address: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  //1-Male 2 Female
  sex: {
    type: Number,
  },
  dateOfBirth: {
    type: Date,
  },
  placeOfBirth: {
    type: String,
  },

  password: {
    type: String,
  },
  cmnd: {
    type: String,
  },
  placeCmnd: {
    type: String,
  },
  //1-Admin 2-SV,3-TC
  role: {
    type: Number,
    default: 2,
  },
  department: {
    type: ObjectId,
    ref: "departments",
  },
  class: {
    type: ObjectId,
    ref: "Clazz",
  },
  dateCmnd: {
    type: Date,
  },
  status: {
    type: Number,
  },
  message: {
    type: ObjectId,
    ref: "messages",
  },
});
module.exports = mongoose.model("users", userSchema);
