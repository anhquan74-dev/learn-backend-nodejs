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
  try {
    await mongoose.connect("mongodb://root:123456@localhost:27018/");
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find((f) => f.value == state).label, "to db");
  } catch (error) {
    console.log("Mongoose check connection error: ", error);
  }
};

module.exports = connection;
