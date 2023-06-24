const connection = require("../config/database");

const getAllUsers = () => {
  return connection.query("SELECT * FROM Users");
};

const getUserById = (userId) => {
  return connection.query("SELECT * FROM Users WHERE id = ?", [userId]);
};

const updateUserById = (user) => {
  const { email, name, city, userId } = user;

  return connection.query(
    `UPDATE Users
    SET email = ?, name = ?, city = ?
    WHERE id = ?`,
    [email, name, city, userId]
  );
};

const deleteUserById = (userId) => {
  return connection.query("DELETE FROM Users WHERE id = ?", [userId]);
};

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById };
