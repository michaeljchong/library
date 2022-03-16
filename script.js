let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.info = function() {
    return title + ' by ' + author + ', ' + numPages + ' pages, ' + (read ? 'read' : 'not read yet')
  }
  this.changeRead = function() {
    this.read = this.read ? false : true;
  }
}

function addBookToLibrary() {
  let f = document.createElement("form");
  f.setAttribute('method', "post");
  f.setAttribute('action', "submit.php");
  let titleLabel = document.createElement("label");
  titleLabel.setAttribute('for', "title");
  titleLabel.innerHTML = "Enter the book title:";
  let title = document.createElement("input");
  title.setAttribute('type', "text");
  title.setAttribute('name', "title");
  title.id = "title";
  // let author = prompt("Enter the book author: ");
  // let numPages = prompt("Enter the number of pages in the book: ");
  // let read = prompt("Has the book been read? ");

  let newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
}

function displayLibrary() {
  let display = document.querySelector(".display");
  for (let index = 0; index < myLibrary.length; index++) {
    let book = document.createElement("div");
    book.id = index;
    book.className = "book";
    book.innerHTML = myLibrary[index].info();
    let remove = document.createElement("button");
    remove.className = "remove";
    remove.innerHTML = "Remove";
    book.appendChild(remove);
    display.appendChild(book);
  }
}

let newBook = document.querySelector(".new");
newBook.addEventListener("click", addBookToLibrary);

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(hobbit);
displayLibrary();
