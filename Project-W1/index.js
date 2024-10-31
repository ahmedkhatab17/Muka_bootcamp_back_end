let books = [];

function addBook(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const year = document.getElementById("year").value;
    const genre = document.getElementById("genre").value;

    const book = { title, author, year, genre };
    books.push(book);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("year").value = "";
    document.getElementById("genre").value = "";

    displayBooks();
}

function displayBooks(){
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    books.forEach((book, index) => {
        const listItem = document.createElement("div");
        listItem.className ='book-item'
        listItem.innerHTML = 
        `<strong>${book.title}</strong> by ${book.author} (${book.year}, ${book.genre})
        <div>
        <button class="edit" onclick="editBook(${index})">Edit</button>
        <button class="delete" onclick="deleteBook(${index})">Delete</button>
        </div>`;

        bookList.appendChild(listItem);
    });
}
//splice
function deleteBook(index){
    books.splice(index, 1);

    displayBooks();
}

function editBook(index){
    const book = books[index];

    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("year").value = book.year;
    document.getElementById("genre").value = book.genre;

    deleteBook(index);
}