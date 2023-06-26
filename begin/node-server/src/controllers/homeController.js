const connection = require("../config/database");
const User = require("../models/User");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  const results = await User.find({});
  return res.render("home.ejs", { users: results });
};

const postCreateUser = async (req, res) => {
  const { email, name, city } = req.body;
  await User.create({
    email,
    name,
    city,
  });
  res.redirect("/");
};

const postUpdateUser = async (req, res) => {
  const { email, name, city, userId } = req.body;
  await User.updateOne({ _id: userId }, { email, name, city });
  res.redirect("/");
};

const getCreateUserPage = (req, res) => {
  res.render("createUser.ejs");
};

const getUpdateUserPage = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.render("updateUser.ejs", { user });
};

const postConfirmDelete = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);
  res.render("confirmDeleteUser.ejs", { user });
};

const postDeleteUser = async (req, res) => {
  const { userId } = req.body;
  await User.deleteOne({ _id: userId });
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
