const connection = require("../config/database");
const User = require("../models/User");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  // const [results, fields] = await getAllUsers();
  const results = [];
  return res.render("home.ejs", { users: results });
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  //   VALUES (?, ?, ?)`,
  //   [email, name, city],
  //   function (err, results, fields) {
  //     console.log(results); // results contains rows returned by server
  //     res.send("create user success");
  //   }
  // );

  // let [results, fields] = await connection.query(
  //   `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
  //   [email, name, city]
  // );
  await User.create({
    email,
    name,
    city,
  });
  res.send("create user success");
};

const postUpdateUser = async (req, res) => {
  const user = req.body;
  let [results, fields] = await updateUserById(user);
  // res.send("Update user success");
  res.redirect("/");
};

const getCreateUserPage = (req, res) => {
  res.render("createUser.ejs");
};

const getUpdateUserPage = async (req, res) => {
  const { userId } = req.params;
  const [results, fields] = await getUserById(userId);
  const user = results && results.length > 0 ? results[0] : {};
  res.render("updateUser.ejs", { user });
};

const postConfirmDelete = async (req, res) => {
  const { userId } = req.params;
  const [results, fields] = await getUserById(userId);
  const user = results && results.length > 0 ? results[0] : {};
  res.render("confirmDeleteUser.ejs", { user });
};

const postDeleteUser = async (req, res) => {
  const { userId } = req.body;
  await deleteUserById(userId);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  postCreateUser,
  postUpdateUser,
  getCreateUserPage,
  getUpdateUserPage,
  postConfirmDelete,
  postDeleteUser,
};
