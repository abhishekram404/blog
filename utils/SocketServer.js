const { Server } = require("socket.io");
const Post = require("../models/Post");
const isProduction = process.env.NODE_ENV === "production";

exports.initializeSocket = async (httpServer) => {
  const postStream = Post.watch([], { fullDocument: "updateLookup" });
  const io = new Server(httpServer, {
    ...(!isProduction && {
      cors: {
        origin: "http://localhost:3000",
      },
    }),
  });

  io.on("connection", (socket) => {
    postStream.on("change", (change) => {
      switch (change.operationType) {
        case "create":
          return socket.emit("new-post", change.fullDocument);
        case "update":
          switch (
            change.updateDescription.updatedFields.hasOwnProperty("likes")
          ) {
            case true:
              return socket.emit("post-like", {
                post_id: change.fullDocument._id,
                likes: change.fullDocument.likes,
                comments: change.fullDocument.comments,
              });
            case false:
              return;
          }
        default:
          return;
      }
    });
  });
};
