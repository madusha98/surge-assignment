import React from "react";
import { Button } from "../";

const Book = ({ book }) => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <img src={book.book_image} alt="bookimage" style={styles.image} />
        <div style={styles.details}>
          <h4 style={styles.title}>{`#${book.rank} ${book.title}`}</h4>
          <h5 style={styles.author}>{book.author}</h5>
          <p style={styles.description}>{book.description}</p>
          {book.book_review_link && <Button title="See Full Review" onClick={() => {window.open(book.book_review_link, '_blank')}} /> }
        </div>
      </div>
      <hr style={styles.divider} />
    </div>
  );
};

const styles = {
  container: {
    margin: 20,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flexStart",
  },
  image: {
    width: 100,
    maxHeight: 160

  },
  title: {
    margin: 0,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    marginLeft: 15,
    marginRight: 15,
  },
  divider: {
    marginTop: 25,
  },
  author: {
    margin: 0,
    marginTop: 10,
    color: "gray",
    fontWeight: 400
  },
  description: {
      marginTop: 10,
      marginBottom: 20
  },
};

export default Book;
