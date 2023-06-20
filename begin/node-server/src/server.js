require("dotenv").config();
const express = require("express"); // commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); // app express
const hostname = process.env.HOST_NAME;
const port = process.env.PORT; // port

// config template engine
configViewEngine(app);

// routes
// app.METHOD(PATH, HANDLER)
app.use("/", webRoutes);

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "learn-nodejs",
});

// simple query
connection.query("SELECT * FROM `Users`", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  // console.log(fields); // fields contains extra meta data about results, if available
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
