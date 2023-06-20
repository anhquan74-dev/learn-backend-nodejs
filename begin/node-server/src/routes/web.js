const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello World! Nodemon</h1>");
});

router.get("/test1", (req, res) => {
  res.send("<h1>Test route 1</h1>");
});

router.get("/test-ejs", (req, res) => {
  res.render("sample.ejs");
});

module.exports = router; // export default
