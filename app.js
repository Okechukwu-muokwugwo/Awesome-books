class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// UI class handle UI Task
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "book one",
        author: "John Doe",
        isbn: "123445",
      },
      {
        title: "book two",
        author: "Jane Doe",
        isbn: "443445",
      },
    ];

    const books = storedBooks;

    books.forEach((book) => UI.addbookToList(book));
  }
  static addbookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = ` <td>${book.title}</td>  <td>${book.author}</td>  <td>${book.isbn}</td> <td><a href = "#" class="btn btn-danger btn-sm delete">X</a></td>`;
    list.appendChild(row);
  }
  static clearField() {
  document.querySelector('#book-title').value='';
  document.querySelector('#book-author').value='';
  document.querySelector('#isbn').value='';
  }
}
//Store Class : Handle Storage

// Event: display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

// Event : Add a book
document.querySelector("#add-book-form").addEventListener('submit',(e) => 
{
    // Prevent actual submit 
    e.preventDefault();

    // Get Form values 
 const title = document.querySelector('#book-title').value;
 const author = document.querySelector('#book-author').value;
 const isbn = document.querySelector('#isbn').value;

 // Instaite book 
 const book = new Book(title, author, isbn);
 
 // add book to UI
 UI.addbookToList(book);

});
// Event : delete a book
