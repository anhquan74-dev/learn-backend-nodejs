const getHomepage = (req, res) => {
  // process data
  // call model
  // res.send("<h1>Hello World! Nodemon</h1>");
  return res.render("home.ejs");
};

module.exports = {
  getHomepage,
};
