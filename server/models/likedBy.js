const mongoose = require("mongoose");

const LikedBySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth", // opsiyonel: eğer kullanıcı modeli varsa referans ver
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post", // opsiyonel: post modeli referansı
      required: true,
    },
  },
  { timestamps: true }
); // istersen createdAt, updatedAt otomatik eklenir

module.exports = mongoose.model("likedby", LikedBySchema);
