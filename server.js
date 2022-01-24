const express = require("express");
const { createServer } = require("http");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const Post = require("./models/Post");
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

require("./utils/DBConnection");
require("./utils/SocketServer").initializeSocket(httpServer);

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
