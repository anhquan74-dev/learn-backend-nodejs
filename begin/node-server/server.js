const express = require("express"); // commonjs
const app = express(); // app express
const port = 8080; // port

// routes
// app.METHOD(PATH, HANDLER)
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/test1", (req, res) => {
  res.send("<h1>Test route 1</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
