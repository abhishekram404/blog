const router = require("express").Router();
const postController = require("../controllers/postController");
const auth = require("../middlewares/auth");
router.post("/create-post", auth, postController.createPost);
router.delete("/delete", auth, postController.deletePost);
router.get("/fetchHomepagePosts", postController.fetchHomepagePosts);
router.get("/fetchProfilePosts", postController.fetchProfilePosts);
router.get("/fetch", postController.fetchAPost);

module.exports = router;
