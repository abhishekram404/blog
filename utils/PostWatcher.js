const Post = require("../models/Post");

const postWatcher = async () => {
  const postStream = Post.watch([], { fullDocument: "updateLookup" });
  postStream.on("change", (change) => console.log(change));
};

module.exports = { postWatcher };
