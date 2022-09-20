let bookData = JSON.parse(localStorage.getItem('storageBooksData'))
  ? JSON.parse(localStorage.getItem('storageBooksData'))
  : [];

function createBooks() {
  const booksContainer = document.querySelector('.books-container');
  const displayBooks = bookData.map((bookList) => `<div id="remove"><p class="book-name">${bookList.title}</p>
<p class="author-name">${bookList.author}</p>
<button type="button" onclick="delBook(${bookList.id})" class="remove-book">Remove</button><hr></div>
`).join('');
  booksContainer.innerHTML = displayBooks;
}
document.addEventListener('DOMContentLoaded', () => {
  createBooks();
});

function sendToLocal(a, b) {
  localStorage.setItem(a, JSON.stringify(b));
  createBooks();
}

function addBook(bookItem) {
  bookData.push(bookItem);
  sendToLocal('storageBooksData', bookData);
}

document.getElementById('add-book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const bookObject = {
    id: bookData.length,
    title: document.getElementById('book-title').value,
    author: document.getElementById('book-author').value,
  };
  addBook(bookObject);
  document.getElementById('book-title').value = '';
  document.getElementById('book-author').value = '';
});

// eslint-disable-next-line no-unused-vars
function delBook(id) {
  const filteredBooks = bookData.filter((item) => item.id !== id);
  bookData = filteredBooks;
  sendToLocal('storageBooksData', filteredBooks);
}