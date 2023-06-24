require("dotenv").config(); // config to receive .env variables
const express = require("express"); // commonjs
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
app.use("/", webRoutes);

// test db connection
(async () => {
  try {
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Mongoose check connection error: ", error);
  }
})();
