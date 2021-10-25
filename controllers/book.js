// create a reference to the model
let Book = require("../models/book");

// Gets all books from the Database and renders the page to list all books.
module.exports.bookList = function (req, res, next) {
  Book.find((err, bookList) => {
    // console.log(bookList);
    if (err) {
      return console.error(err);
    } else {
      res.render("book/list", {
        title: "Book List",
        books: bookList,
      });
    }
  });
};

// Gets a book by id and renders the details page.
module.exports.details = (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToShow) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("book/details", {
        title: "Book Details",
        book: bookToShow,
      });
    }
  });
};

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
  let newBook = Book({
    Title: "",
    Description: "",
    Price: 0.0,
    Author: "",
    Genre: "",
  });
  res.render("book/add_edit", {
    title: "Add Book",
    book: newBook,
  });
};

// Processes the data submitted from the Add form to create a new book
module.exports.processAddPage = (req, res, next) => {
  let newBook = Book({
    Title: req.body.Title,
    Description: req.body.Description,
    Price: req.body.Price,
    Author: req.body.Author,
    Genre: req.body.Genre,
  });
  Book.create(newBook, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect("/book/list");
    }
  });
};

// Gets a book by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;

  Book.findById(id, (err, bookToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render("book/add_edit", {
        title: "Edit Book",
        book: bookToEdit,
      });
    }
  });
};

// Processes the data submitted from the Edit form to update a book
module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;

  Book.updateOne(
    { _id: id },
    {
      $set: {
        Title: req.body.Title,
        Description: req.body.Description,
        Price: req.body.Price,
        Author: req.body.Author,
        Genre: req.body.Genre,
      },
    },
    (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect("/book/list");
      }
    }
  );
};

// Deletes a book based on its id.
module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;

  Book.deleteOne({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/book/list");
    }
  });
};
