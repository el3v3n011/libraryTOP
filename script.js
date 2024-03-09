const myLibrary = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true, 'Fantasy'),
    new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true, 'Fantasy'),
    new Book('The Two Towers', 'J.R.R. Tolkien', 352, true, 'Fantasy'),
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true, 'Fantasy'),
    new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true, 'Fantasy'),
    new Book('The Two Towers', 'J.R.R. Tolkien', 352, true, 'Fantasy'),
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true, 'Fantasy'),
    new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true, 'Fantasy'),
    new Book('The Two Towers', 'J.R.R. Tolkien', 352, true, 'Fantasy'),
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true, 'Fantasy'),
    new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 423, true, 'Fantasy'),
    new Book('The Two Towers', 'J.R.R. Tolkien', 352, true, 'Fantasy'),
];
function Book(title, author, pages,isread,genre) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.isread = isread;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${isread}`;
    }

}
function addBookToLibrary(title, author, pages,isread,genre) {
    myLibrary.push(new Book(title, author, pages,isread,genre));
}
function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        const title = document.createElement('h2');
        title.textContent = myLibrary[i].title;
        const author = document.createElement('h3');
        author.textContent = myLibrary[i].author;
        const genre = document.createElement('p');
        genre.textContent = myLibrary[i].genre;
        const pages = document.createElement('p');
        pages.textContent = myLibrary[i].pages;
        const isread = document.createElement('p');
        if (myLibrary[i].isread) {
            isread.textContent = 'Read';
        } else {
            isread.textContent = 'Not Read';
        }
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(genre);
        card.appendChild(pages);
        card.appendChild(isread);
        container.appendChild(card);

        }
}
const container = document.querySelector('.BOOK');

const newBookButton = document.querySelector('#newBookButton');
const newBookDialog = document.querySelector('#newBookDialog');

newBookButton.addEventListener('click', () => {
    newBookDialog.showModal();
});
const form = document.querySelector('#newbookform');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const isreadInput = document.querySelector('#isRead');
    const genreInput = document.querySelector('#genre');
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value);
    const isread = isreadInput.checked;
    const genre = genreInput.value;

    addBookToLibrary(title, author, pages,isread,genre);
    displayBooks();
    form.reset();
    newBookDialog.close();
    container.innerHTML = ''; 
    displayBooks(); // Render the entire array again
});


displayBooks();