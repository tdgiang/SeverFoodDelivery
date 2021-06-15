const mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var messagesSchema = new Schema({
  id_Mess: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  user: {
    type: Object,
  },
  to: {
    type: Object,
  },
});
module.exports = mongoose.model("messages", messagesSchema);
