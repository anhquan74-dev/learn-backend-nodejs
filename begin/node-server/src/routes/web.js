const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateUser,
} = require("../controllers/homeController");

// router.METHOD(path, handler)

router.get("/", getHomepage);

router.get("/test1", (req, res) => {
  res.send("<h1>Test route 1</h1>");
});

router.get("/test-ejs", (req, res) => {
  res.render("sample.ejs");
});

router.post("/create-user", postCreateUser);

module.exports = router; // export default
