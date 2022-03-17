let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
  this.info = function() {
    return title + ' by ' + author + ', ' + numPages + ' pages, ' + (read ? 'read' : 'not read yet')
  }
  this.toggleRead = function() {
    this.read = this.read ? false : true;
    displayLibrary();
  }
}

function newBookForm() {
  let f = document.createElement("form");
  f.setAttribute('method', "post");
  f.setAttribute('action', "");
  f.setAttribute('onsubmit', "return validateForm()")
  let titleLabel = document.createElement("label");
  titleLabel.setAttribute('for', "title");
  titleLabel.innerHTML = "Enter the book title:";
  let title = document.createElement("input");
  title.setAttribute('type', "text");
  title.setAttribute('name', "title");
  title.required = true;
  let authorLabel = document.createElement("label");
  authorLabel.setAttribute('for', "author");
  authorLabel.innerHTML = "Enter the book author:";
  let author = document.createElement("input");
  author.setAttribute('type', "text");
  author.setAttribute('name', "author");
  let numPagesLabel = document.createElement("label");
  numPagesLabel.setAttribute('for', "numPages");
  numPagesLabel.innerHTML = "Enter the number of pages in the book:";
  let numPages = document.createElement("input");
  numPages.setAttribute('type', "number");
  numPages.setAttribute('name', "numPages");
  let readLabel = document.createElement("label");
  readLabel.setAttribute('for', "read");
  readLabel.innerHTML = "Has the book been read?";
  let wasReadDiv = document.createElement("div");
  let wasRead = document.createElement("input");
  wasRead.setAttribute('type', "radio");
  wasRead.setAttribute('name', "read");
  wasRead.setAttribute('value', true);
  let wasReadLabel = document.createElement("label");
  wasReadLabel.setAttribute('for', "Yes");
  wasReadLabel.innerHTML = "Yes";
  let unReadDiv = document.createElement("div");
  let unRead = document.createElement("input");
  unRead.setAttribute('type', "radio");
  unRead.setAttribute('name', "read");
  unRead.setAttribute('value', false);
  let unReadLabel = document.createElement("label");
  unReadLabel.setAttribute('for', "No");
  unReadLabel.innerHTML = "No";
  let submit = document.createElement("button");
  submit.setAttribute('type', "button");
  submit.className = "submit";
  submit.innerHTML = "Submit";
  wasReadDiv.appendChild(wasRead);
  wasReadDiv.appendChild(wasReadLabel);
  unReadDiv.appendChild(unRead);
  unReadDiv.appendChild(unReadLabel);
  f.appendChild(titleLabel);
  f.appendChild(title);
  f.appendChild(authorLabel);
  f.appendChild(author);
  f.appendChild(numPagesLabel);
  f.appendChild(numPages);
  f.appendChild(readLabel);
  f.appendChild(wasReadDiv);
  f.appendChild(unReadDiv);
  f.appendChild(submit);
  document.body.appendChild(f);
  document.querySelector(".submit").addEventListener("click", addBookToLibrary);
}

function addBookToLibrary() {
  let title = document.querySelector("input[name='title']").value;
  let author = document.querySelector("input[name='author']").value;
  let numPages = document.querySelector("input[name='numPages']").value;
  let read = document.querySelector("input[value='true']").checked;
  let newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
  document.querySelector("form").remove();
  displayLibrary();
}

function displayLibrary() {
  let display = document.querySelector(".display");
  display.innerHTML = null;
  for (let index = 0; index < myLibrary.length; index++) {
    let book = document.createElement("div");
    book.id = index;
    book.className = "book";
    book.innerHTML = myLibrary[index].info();
    let toggleReadStatus = document.createElement("button");
    toggleReadStatus.className = "toggle";
    toggleReadStatus.innerHTML = "Read / Unread";
    let remove = document.createElement("button");
    remove.className = "remove";
    remove.innerHTML = "Remove";
    book.appendChild(toggleReadStatus);
    book.appendChild(remove);
    display.appendChild(book);
  }
}

let newBook = document.querySelector(".new");
newBook.addEventListener("click", newBookForm);

const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(hobbit);
displayLibrary();
