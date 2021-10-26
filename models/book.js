// File Name: models/book.js | Student Name: Zachery Cardoza | Student Id: 301183433 | Oct 26th, 2021
let mongoose = require("mongoose");

// Create a model class
let bookModel = mongoose.Schema(
  {
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String,
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", bookModel);
