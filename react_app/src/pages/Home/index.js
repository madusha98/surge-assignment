import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../services/booksService";
import { Book, BookPlaceholder } from "../../components";

const Home = () => {
  const [data, setData] = useState({ books: [], display_name: '...' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = () => {
      setLoading(true);
      fetchBooks(abortController)
        .then((result) => {
          setData(result.results);
        })
        .catch((err) => {
          console.log("error", err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div style={{
        maxWidth: 800,
        margin: 'auto',
    }}>
        <h3 style={{margin: 20, marginBottom: 60, marginTop: 40}}>{`NYTimes Best Sellers - ${data.display_name}`}</h3>
      {loading ? (
        <BookPlaceholder />
      ) : (
        data.books.map((book) => <Book key={book.primary_isbn10} book={book} />)
      )}
    </div>
  );
};

export default Home;
