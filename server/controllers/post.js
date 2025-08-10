const PostSchema = require("../models/post.js");
const LikedBySchema = require("../models/likedBy.js");

const getPosts = async (req, res) => {
  try {
    const getPosts = await PostSchema.find();

    res.status(200).json(getPosts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const createPost = async (req, res) => {
  try {
    const newPost = await PostSchema.create(req.body);

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const alreadyLikedAnyPost = await LikedBySchema.findOne({
      userId: req.body.userId,
      postId: id,
    });
    if (alreadyLikedAnyPost) {
      return res
        .status(500)
        .json({ msg: "Zaten daha önce bu yazıyı beğendiniz." });
    }
    if (req.body.likeIncrement) {
      let update = await PostSchema.findByIdAndUpdate(
        id,
        { $inc: { like: 1 } },
        req.body,
        { new: true }
      );
      update = await PostSchema.findOne({
        _id: id,
      });
      const postLikedBy = { userId: req.body.userId, postId: id };
      await LikedBySchema.create(postLikedBy);
      res.status(200).json(update);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await PostSchema.findByIdAndDelete(id);

    res.status(200).json({ msg: "Silme işlemi başarılı." });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = { getPosts, createPost, updatePost, deletePost };
