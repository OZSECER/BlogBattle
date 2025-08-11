const mongoose = require("mongoose");
const { Int32 } = require("mongodb");

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Auth",
    required: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  like: {
    type: Int32,
    default: 0,
  },
});

module.exports = mongoose.model("post", PostSchema);
