import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import "../src/components/styles.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [randomBooks, setRandomBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchRandomBooks = async () => {
      try {
        const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=programming");
        const data = await response.json();
        if (data.items) {
          const shuffled = data.items.sort(() => 0.5 - Math.random());
          setRandomBooks(shuffled.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching random books:", error);
      }
    };
    fetchRandomBooks();
  }, []);

  const fetchBooks = async (query) => {
    try {
      setIsSearching(true);
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={fetchBooks} />
      {!isSearching && (
        <>
          <h2 className="suggestion">I suggest you to learn these books</h2>
          <BookList books={randomBooks} onSelectBook={setSelectedBook} />
        </>
      )}
      <BookList books={books} onSelectBook={setSelectedBook} />
      {selectedBook && <BookDetails book={selectedBook} onClose={() => setSelectedBook(null)} />}
    </div>
  );
};

export default App;
