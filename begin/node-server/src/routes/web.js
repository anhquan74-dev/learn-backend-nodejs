const express = require("express");
const router = express.Router();
const {
  getHomepage,
  postCreateUser,
  getCreateUserPage,
  getUpdateUserPage,
  postUpdateUser,
  postConfirmDelete,
  postDeleteUser,
} = require("../controllers/homeController");

// router.METHOD(path, handler)

router.get("/", getHomepage);

router.get("/test1", (req, res) => {
  res.send("<h1>Test route 1</h1>");
});

router.get("/test-ejs", (req, res) => {
  res.render("sample.ejs");
});

router.get("/create", getCreateUserPage);

router.get("/update/:userId", getUpdateUserPage);

router.post("/create-user-success", postCreateUser);

router.post("/update-user-success", postUpdateUser);

router.post("/confirm-delete/:userId", postConfirmDelete);

router.post("/delete-user-success", postDeleteUser);

module.exports = router; // export default
