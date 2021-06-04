const mongoose = require("mongoose");

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

//consts.schemaOptions.collection = "class";
var classSchema = new Schema(
  {
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
  },
  {
    collection: "classs",
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);
module.exports = mongoose.model("Clazz", classSchema);
