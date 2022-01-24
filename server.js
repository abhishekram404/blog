const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const Post = require("./models/Post");
const { postWatcher } = require("./utils/PostWatcher");
dotenv.config();
const app = express();
const httpServer = createServer(app);

const isProduction = process.env.NODE_ENV === "production";

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    isProduction
      ? "https://abhishekram404-blog.herokuapp.com"
      : "http://localhost:3000"
  );
  res.header("Access-Control-Allow-Credentials", true);

  next();
});

app.use(
  cors({
    origin: isProduction
      ? "https://abhishekram404-blog.herokuapp.com"
      : "http://localhost:3000",
    credentials: true,
    maxAge: "17280000",
  })
);

app.use(cookieParser());
app.use(
  bodyParser.json({
    extended: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(
  `mongodb+srv://blogadmin:${process.env.MONGO_PASS}@blog.vxoiw.mongodb.net/blog?retryWrites=true&w=majority`,
  // isProduction
  //   ? `mongodb+srv://blogadmin:${process.env.MONGO_PASS}@blog.vxoiw.mongodb.net/blog?retryWrites=true&w=majority`
  //   : process.env.MONGO_URI || "mongodb://localhost:27017/blog",
  (err) => {
    if (err) {
      console.log("🔴 Error connecting to database");
      console.log(err.message);
      return;
    }
    console.log("✅  Connected to database");
  }
);

const io = new Server(httpServer, {
  ...(!isProduction && {
    cors: {
      origin: "http://localhost:3000",
    },
  }),
});
io.on("connection", (socket) => {
  console.log("A new client connected.", socket.id);

  socket.emit("message", "Welcome my dear client.");
});

postWatcher();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
  app.get("/", async (req, res) => {
    return res.sendFile(__dirname, "client", "build", "index.html");
  });
}

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

const port = process.env.PORT || 4000;
httpServer.listen(port, (err) => {
  if (err) throw err;
  console.log(`🚀  SERVER STARTED ON PORT ${port}`);
});
