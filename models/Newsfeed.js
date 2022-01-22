const mongoose = require("mongoose");

const newsfeedSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    authorName: { type: String },
    authorUsername: { type: String },
  },
  likesCount: Number,
  commentsCount: Number,
});
