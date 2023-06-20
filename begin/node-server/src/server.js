require("dotenv").config();
const express = require("express"); // commonjs
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");

const app = express(); // app express
const hostname = process.env.HOST_NAME;
const port = process.env.PORT; // port

// config template engine
configViewEngine(app);

// routes
// app.METHOD(PATH, HANDLER)
app.use("/", webRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
