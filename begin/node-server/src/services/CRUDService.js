const connection = require("../config/database");

const getAllUsers = () => {
  return connection.query("SELECT * FROM Users");
};

const getUserById = (userId) => {
  return connection.query(`SELECT * FROM Users WHERE id = ${userId}`);
};

module.exports = { getAllUsers, getUserById };
