// Create Object Array for the books
const userBookList = [];
const books = [];
const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', () => {
  const bookData = {
    title: document.getElementById('book-title').value,
    author: document.getElementById('book-author').value,
  };
  userBookList.push(bookData);
  localStorage.setItem('userBookData', JSON.stringify(userBookList));

  const userBookDataLocalStorage = JSON.parse(localStorage.getItem('userBookData'));
  books.push(userBookDataLocalStorage[userBookDataLocalStorage.length - 1]);
  // Display books
  const booksContainer = document.querySelector('.books-container');

  const displayBooks = books.map((bookList) => `<div id="remove"><p class="book-name">${bookList.title}</p>
<p class="author-name">${bookList.author}</p>
<button type="button" class="remove-book">Remove</button></div>
<hr>`).join('');

  booksContainer.innerHTML = displayBooks;

  const removeButton = document.querySelector('.remove-book');
  removeButton.addEventListener('click', () => {
    const removeElement = document.getElementById('remove');
    removeElement.remove();
    localStorage.clear();
  });
});

// removeButton.addEventListener('click', (e) => {
//   const { target } = e;
//   target.parentElement.remove();
// });