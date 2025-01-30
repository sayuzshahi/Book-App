import BookCard from "./BookCard";

const BookList = ({ books, onSelectBook }) => {
  if (!books.length) {
    return ;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onSelect={() => onSelectBook(book)} />
      ))}
    </div>
  );
};

export default BookList;
