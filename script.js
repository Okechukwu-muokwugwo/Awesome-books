const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');

// Create Object Array for the books

const books = [
  {
   bookTitle: bookTitle.value,
   bookAuthor: bookAuthor.value,
  },
];

const booksContainer = document.querySelector('.books-container');

const displayBooks = books.map((bookList) => `<p class="book-name">${bookList.bookTitle}</p>
<p class="author-name">${bookList.bookAuthor}</p>
<button type="button" class="remove-book">Remove</button>`)

booksContainer.innerHTML = displayBooks;