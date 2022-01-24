const mongoose = require("mongoose");

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
