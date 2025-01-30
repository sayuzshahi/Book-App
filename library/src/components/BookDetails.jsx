const BookDetails = ({ book, onClose }) => {
  const { title, authors, description, imageLinks} = book.volumeInfo;

  return (
    <div className="book-details">
      <div className="book-details-content">
        <button className="close-button" onClick={onClose}>✖</button>
        <img src={imageLinks?.thumbnail} alt={title} />
        <h5>{title}</h5>
        <p><strong>By:</strong> {authors?.join(", ")}</p>
        <p>{description.substring(0, 500)}</p>
      </div>
    </div>
  );
};

export default BookDetails;
