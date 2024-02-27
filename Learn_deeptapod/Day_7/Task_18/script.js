const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
];

const searchInput = document.getElementById("searchInput");
const bookList = document.getElementById("bookList");

function displayBooks(filteredBooks) {
  bookList.innerHTML = "";
  filteredBooks.forEach(book => {
      const li = document.createElement("li");
      const highlightedTitle = book.title.replace(new RegExp(searchInput.value, "gi"), match => `<span class="highlight">${match}</span>`);
      const highlightedAuthor = book.author.replace(new RegExp(searchInput.value, "gi"), match => `<span class="highlight">${match}</span>`);
      li.innerHTML = `${highlightedTitle} by ${highlightedAuthor}`;
      bookList.appendChild(li);
  });
}

function handleSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm) ||
      book.author.toLowerCase().includes(searchTerm)
  );
  displayBooks(filteredBooks);
}

searchInput.addEventListener("input", handleSearch);
handleSearch(); 
