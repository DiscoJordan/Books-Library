import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Redux/slices/booksSlice";
import booksData from "../books.json";
import createBookWithId from "../utils/createBookWithId";

function Bookform() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook(createBookWithId({ author, title, year })));
      setTitle("");
      setAuthor("");
      setYear("");
    }
  };
  const handleAddRandom = (e) => {
    e.preventDefault();
    let randomId = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomId];
    dispatch(addBook(createBookWithId(randomBook)));
  };

  return (
    <div className="app-block book-form">
      <h2>Add a new Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="year">Year:</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <button type="submit"> Add Book</button>
        <button type="button" onClick={handleAddRandom}>
          {" "}
          Add Random Book
        </button>
      </form>
    </div>
  );
}

export default Bookform;
