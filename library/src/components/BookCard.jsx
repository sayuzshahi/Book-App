const BookCard = ({ book, onSelect }) => {
  const { title, authors, imageLinks } = book.volumeInfo;

  return (
    <div className="book-card" onClick={onSelect}>
      <img src={imageLinks?.thumbnail} alt={title} />
      <h3>{title}</h3>
      <p>{authors?.join(", ")}</p>
    </div>
  );
};

export default BookCard;
