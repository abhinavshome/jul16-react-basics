import styles from "./Book.module.css";
import Rating from "./Rating";

const Book = ({ book, onRateUp, onRateDown }) => {
  return (
    <div>
      <div className={styles.title}>{book.title}</div>
      <div className={styles.author}>{book.author}</div>
      <div>{book.price}</div>
      <Rating rating={book.rating} />
      <div>
        <button onClick={() => onRateUp(book.id)}>+</button>
        <button onClick={() => onRateDown(book.id)}>-</button>
      </div>
      <hr />
    </div>
  );
};

export default Book;
