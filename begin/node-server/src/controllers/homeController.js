const getHomepage = (req, res) => {
  // process data
  // call model
  res.send("<h1>Hello World! Nodemon</h1>");
};

module.exports = {
  getHomepage,
};
