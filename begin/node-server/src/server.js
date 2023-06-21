require("dotenv").config();
const express = require("express"); // commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const hostname = process.env.HOST_NAME;
const port = process.env.PORT; // port

// config template engine
configViewEngine(app);

// config req.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// routes
// app.METHOD(PATH, HANDLER)
app.use("/", webRoutes);

// simple query
// connection.query("SELECT * FROM `Users`", function (err, results, fields) {
//   console.log("results: ", results); // results contains rows returned by server
//   // console.log(fields); // fields contains extra meta data about results, if available
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
