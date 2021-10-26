// File Name: controllers/index.js | Student Name: Zachery Cardoza | Student Id: 301183433 | Oct 26th, 2021
exports.home = function (req, res, next) {
  res.render("index", { title: "Home" });
};
