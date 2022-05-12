let myLibrary = [];

class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
  }
  
  this.info = function() {
    return this.title + ' by ' + this.author + ', ' + this.numPages + ' pages, ' + (this.read ? 'read' : 'not read yet')
  }
  this.toggleRead = function() {
    this.read = !this.read;
  }
}

function addBookToLibrary() {
  let title = document.querySelector("input[name='title']").value;
  let author = document.querySelector("input[name='author']").value;
  let numPages = document.querySelector("input[name='numPages']").value;
  let read = document.querySelector("input[value='true']").checked;
  if (title !== "" && author !== "" && numPages !== "") {
    let newBook = new Book(title, author, numPages, read);
    myLibrary.push(newBook);
    let form = document.querySelector("form");
    form.reset();
    form.style.display = "none";
  }
  displayLibrary();
}

function displayLibrary() {
  let display = document.querySelector(".display");
  display.innerHTML = null;
  for (let index = 0; index < myLibrary.length; index++) {
    let book = document.createElement("div");
    book.id = index;
    book.className = "book";
    let info = document.createElement("p");
    info.innerHTML = myLibrary[index].info();
    let toggleReadStatus = document.createElement("button");
    toggleReadStatus.className = "toggle";
    toggleReadStatus.innerHTML = "Read / Unread";
    let remove = document.createElement("button");
    remove.className = "remove";
    remove.innerHTML = "Remove";
    book.appendChild(info);
    book.appendChild(toggleReadStatus);
    book.appendChild(remove);
    display.appendChild(book);
    toggleReadStatus.addEventListener("click", () => {
      myLibrary[index].toggleRead();
      info.innerHTML = myLibrary[index].info();
    });
    remove.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      remove.parentNode.remove();
    });
  }
}

let newBook = document.querySelector(".new");
newBook.addEventListener("click", function() {
  document.querySelector("form").style.display = "flex";
});
document.querySelector(".submit").addEventListener("click", addBookToLibrary);


const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(hobbit);
const montecristo = new Book('The Count of Monte Cristo', 'Alexandre Dumas', 1276, false);
myLibrary.push(montecristo);
displayLibrary();
