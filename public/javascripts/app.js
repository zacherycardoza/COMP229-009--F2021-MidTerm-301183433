// File Name: public/javascripts/app.js | Student Name: Zachery Cardoza | Student Id: 301183433 | Oct 26th, 2021
console.log("Goes to the client side.");

if (getTitle == "Book List") {
  let deleteButtons = document.querySelectorAll(".btn-danger");

  for (button of deleteButtons) {
    button.addEventListener("click", (event) => {
      if (!confirm("Are you sure?")) {
        event.preventDefault();
      }
    });
  }
}
