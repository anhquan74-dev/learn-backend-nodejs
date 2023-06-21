const connection = require("../config/database");

const getHomepage = (req, res) => {
  // process data
  // call model
  // res.send("<h1>Hello World! Nodemon</h1>");
  return res.render("home.ejs");
};

const postCreateUser = (req, res) => {
  console.log(req.body);
  const { email, name, city } = req.body;

  connection.query(
    `INSERT INTO Users (email, name, city) 
    VALUES (?, ?, ?)`,
    [email, name, city],
    function (err, results, fields) {
      console.log(results); // results contains rows returned by server
      res.send("create user success: ");
    }
  );
};

module.exports = {
  getHomepage,
  postCreateUser,
};
