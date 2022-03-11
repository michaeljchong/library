let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.info = function() {
    return title + ' by ' + author + ', ' + numPages + ' pages, ' + (read ? 'read' : 'not read yet')
  }
}

function addBookToLibrary() {
  let title = prompt("Enter the book title: ");
  let author = prompt("Enter the book author: ");
  let numPages = prompt("Enter the number of pages in the book: ");
  let read = prompt("Has the book been read? ");
  let newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
}

function displayLibrary() {
  let list = document.querySelector("ul");
  myLibrary.forEach(function(book) {
    entry = document.createElement("li");
    entry.innerHTML = book.info();
    list.appendChild(entry);
  });
}

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(hobbit);
displayLibrary();
