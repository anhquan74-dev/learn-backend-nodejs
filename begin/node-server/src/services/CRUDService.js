const connection = require("../config/database");

const getAllUsers = () => {
  return connection.query("SELECT * FROM Users");
};

module.exports = { getAllUsers };
