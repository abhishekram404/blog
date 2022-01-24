const Post = require("../models/Post");
const User = require("../models/User");
module.exports.createPost = async (req, res) => {
  try {
    const {
      title,
      tags,
      category,
      content,
      authorId,
      authorName,
      authorUsername,
    } = await req.body;

    const { submitType } = await req.query;

    if (!title) {
      return res
        .send({
          success: false,
          message: "Post needs a title.",
        })
        .status(400);
    }

    const newPost = await Post.create({
      title: title.trim(),
      content,
      category: category.trim(),
      tags,
      author: {
        authorId,
        authorName,
        authorUsername,
      },
      published: submitType === "draft" ? false : true,
    });
    await User.findByIdAndUpdate(
      authorId,
      {
        $push: { posts: newPost._id },
      },
      {
        new: true,
        multi: false,
      }
    );
    res.status(200).send({
      success: true,
      message: "Post created successfully.",
      details: newPost,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error creating new post. Please try again.",
    });
  }
};

module.exports.fetchHomepagePosts = async (req, res) => {
  try {
    const { skip } = await req.query;
    const posts = await Post.find(
      { published: true },
      "title  category author likes comments tags"
    )
      .sort({ _id: -1 })
      // .skip(Number(skip))
      // .limit(3)
      .lean();
    return res.send({
      success: true,
      message: "Posts fetched successfully",
      details: posts,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "Something went wrong while fetching posts.",
      details: null,
    });
  }
};

module.exports.fetchProfilePosts = async (req, res) => {
  try {
    const { skip, profile } = await req.query;
    const posts = await Post.find(
      {
        published: true,
        // author: {
        //   authorUsername: profile,
        // },
      },
      "title content category author likes comments"
    )
      .sort({ _id: -1 })
      .skip(skip ?? 0)
      .limit(3)
      .lean();

    return res.send({
      success: true,
      message: "Posts fetched successfully",
      details: posts,
    });
  } catch (error) {
    return res.send({
      success: false,
      message: "Something went wrong while fetching posts.",
      details: null,
    });
  }
};

module.exports.fetchAPost = async (req, res) => {
  try {
    const { id } = await req.query;
    const foundPost = await Post.findOne({ published: true, _id: id }).select(
      "title content author createdAt category likes comments"
    );

    if (!foundPost) {
      return res.send({
        success: false,
        message: "The post that you requested for doesn't exist.",
        details: null,
      });
    }

    return res
      .send({
        success: true,
        message: "Post fetched successfully",
        details: foundPost,
      })
      .status(200);
  } catch (error) {
    return res.send({
      success: false,
      message: "Something went wrong while fetching the post.",
      details: null,
    });
  }
};

module.exports.likePost = async (req, res) => {
  try {
    const { authUserId } = await req;
    const { postId } = await req.body;

    const foundUser = await User.findById(authUserId).lean();
    const foundPost = await Post.findById(postId).lean();

    if (
      foundUser.userLikes.some((id) => id.equals(foundPost._id)) ||
      foundPost.likes.some((id) => id.equals(foundUser._id))
    ) {
      const likedPost = await Post.findByIdAndUpdate(
        foundPost._id,
        {
          $pull: {
            likes: foundUser._id,
          },
        },
        { upsert: true }
      );
      const likedBy = await User.findByIdAndUpdate(
        foundUser._id,
        {
          $pull: {
            userLikes: likedPost._id,
          },
        },
        { upsert: true }
      );
      return res.status(200).send({
        success: true,
        message: "Post unliked successfully.",
        details: null,
      });
    }

    const likedPost = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          likes: foundUser._id,
        },
      },
      { upsert: true }
    );
    const likedBy = await User.findByIdAndUpdate(
      authUserId,
      {
        $push: {
          userLikes: likedPost._id,
        },
      },
      { upsert: true }
    );
    return res.status(200).send({
      success: true,
      message: "Post liked successfully.",
      details: null,
    });
  } catch (error) {
    console.log(error.message);
    return res
      .send({
        success: false,
        message: "Something went wrong while liking the post.",
        details: null,
      })
      .status(500);
  }
};
