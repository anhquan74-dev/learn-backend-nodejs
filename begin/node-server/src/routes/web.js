const express = require("express");
const router = express.Router();
const { getHomepage } = require("../controllers/homeController");

// router.METHOD(path, handler)

router.get("/", getHomepage);

router.get("/test1", (req, res) => {
  res.send("<h1>Test route 1</h1>");
});

router.get("/test-ejs", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router; // export default
