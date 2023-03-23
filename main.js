const form = document.getElementById('form');
const bookList = document.getElementById('bookList');
const btn = document.getElementById('btn');


let booksList = JSON.parse(localStorage.getItem('books')) || [];


 function addBook (title, author) {
  const newBook = { title, author };
  booksList.push(newBook);
  localStorage.setItem("books", JSON.stringify(booksList));
  displayBooks();
 }

 function removeBook(book) {
  booksList = booksList.filter((a) => a !== book);
  localStorage.setItem('books', JSON.stringify(booksList));
  displayBooks();
}

 function displayBooks() {
    bookList.innerHTML = '';
    booksList.forEach((book) => {
    const li = document.createElement('li');
    li.innerHTML = `${book.title} <br> ${book.author} <br>`;
    const removeBtn = document.createElement('button');
    const hr = document.createElement('hr');
    removeBtn.innerHTML = 'Remove';
    removeBtn.addEventListener('click', () => removeBook(book));
    li.appendChild(removeBtn);
    bookList.appendChild(li);
    bookList.appendChild(hr);
  });
};

 displayBooks();
 
 form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookTitle = document.getElementById('titleInput');
  const bookAuthor = document.getElementById('authorInput');
  addBook(bookTitle.value, bookAuthor.value);
  titleInput.value = '';
  authorInput.value = '';
 });
