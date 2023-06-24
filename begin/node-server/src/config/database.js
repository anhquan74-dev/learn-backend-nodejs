require("dotenv").config();
const mongoose = require("mongoose");

var dbState = [
  {
    value: 0,
    label: "disconnected",
  },
  {
    value: 1,
    label: "connected",
  },
  {
    value: 2,
    label: "connecting",
  },
  {
    value: 3,
    label: "disconnecting",
  },
];

// create the connection to database
const connection = async () => {
  // mongoose
  //   .connect("mongodb://127.0.0.1:27017/test")
  //   .catch((error) => handleError(error));

  // Or:
  const options = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
  };
  // try {
  await mongoose.connect(process.env.DB_HOST, options);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((f) => f.value == state).label, "to db");
  // } catch (error) {
  //   console.log("Mongoose check connection error: ", error);
  // }
};

module.exports = connection;
