const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  const [results, fields] = await getAllUsers();
  return res.render("home.ejs", { users: results });
};

const postCreateUser = async (req, res) => {
  console.log(req.body);
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

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
    [email, name, city]
  );
  console.log("results: ", results); // results contains rows returned by server
  res.send("create user success");
};

const getCreateUserPage = (req, res) => {
  res.render("createUser.ejs");
};

module.exports = {
  getHomepage,
  postCreateUser,
  getCreateUserPage,
};
