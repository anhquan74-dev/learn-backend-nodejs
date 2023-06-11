const express = require("express"); // commonjs
const path = require("path");
const app = express(); // app express
const port = 8080; // port

// config template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// routes
// app.METHOD(PATH, HANDLER)
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/test1", (req, res) => {
  res.send("<h1>Test route 1</h1>");
});

app.get("/test-ejs", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
