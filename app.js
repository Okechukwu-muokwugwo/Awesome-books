class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// UI class handle UI Task
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: "book one",
        author: "John Doe",
      },
      {
        title: "book two",
        author: "Jane Doe",
      },
    ];

    const books = storedBooks;

    books.forEach((book) => UI.addbookToList(book));
  }
  static addbookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    row.innerHTML = ` <td>${book.title}</td>  <td>${book.author}</td>  <td><a href = "#" class="btn btn-danger btn-sm delete">X</a></td>`;
    list.appendChild(row);
  }
  static deleteBook(el){
   if(el.classList.contains('delete') ) {
    el.parentElement.parentElement.remove();
   }
  }

  static clearField() {
  document.querySelector('#book-title').value='';
  document.querySelector('#book-author').value='';
  }
}
//Store Class : Handle Storage

class store {
    static getbooks() {
        let books;
      if(localStorage.getItem('books') === null) {
        books = [];
      } else {
        books = JSON.parse(localStorage.getItem(books));
      }
      return books;
    }

    static addBooks(book) {
        const books = store.getbooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));

    }

    
    static removeBooks(title){
        const books = store.getbooks();
        books.forEach((book, index) => {

            if(book.title === title) {
                books.splice(index , 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

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

 //validate
 if(title == '' || author == '') {
    alert('please fill in all fields');
 } else {

 // Instaite book 
 const book = new Book(title, author);
 
 // add book to UI
 UI.addbookToList(book);

 // add book to store
 store.addBooks(book);

 //clear fields
 UI.clearField();
}
});
// Event : delete a book
document.querySelector('#book-list').addEventListener('click',(e) => {
    UI.deleteBook(e.target);
});