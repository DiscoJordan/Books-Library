import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../Redux/books/actionCreators";
import { v4 as uuidv4 } from 'uuid';
import booksData from '../books.json'

function Bookform() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = { title: title, author: author,isFav:false, id:uuidv4() };

      setTitle("");
      setAuthor("");

      dispatch(addBook(book));
    }
  };
  const handleAddRandom = (e) => {
    e.preventDefault();
    let randomId = Math.floor(Math.random()*booksData.length)
    const randomBook = booksData[randomId]
    const book = { ...randomBook,isFav:false, id:uuidv4() };
    dispatch(addBook(book));
   
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
          <label htmlFor="title">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit"> Add Book</button>
        <button type="button" onClick={handleAddRandom}> Add Random Book</button>
      </form>
    </div>
  );
}

export default Bookform;
