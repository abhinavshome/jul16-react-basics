import { Link } from "react-router-dom";
import styles from "./Book.module.css";

import Rating from "./Rating";

const Book = ({ book, onRateUp, onRateDown, onAddToCart, filters }) => {
  if (book.rating < 5 && filters.topRated) {
    return;
  }

  if (book.price >= 20 && filters.lessThan20) {
    return;
  }

  return (
    <div
      style={{
        backgroundColor: book.rating === 5 ? "lightpink" : "",
      }}
    >
      <div className={styles.title}>
        <Link to={"/book/" + book.id}>{book.title}</Link>
      </div>
      <div className={styles.author}>{book.author}</div>
      <div>{book.price}</div>
      <Rating rating={book.rating} />
      <div>
        <button onClick={() => onRateUp(book.id)}>+</button>
        <button onClick={() => onRateDown(book.id)}>-</button>
        <button onClick={() => onAddToCart(book)}>@</button>
      </div>
      <hr />
    </div>
  );
};

export default Book;
