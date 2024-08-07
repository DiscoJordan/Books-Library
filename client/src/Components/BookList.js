import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MdOutlineDeleteForever } from "react-icons/md";
import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import {
  selectTitleFilter,
  selectAuthorFilter,
  selectFavoriteFilter,
} from "../Redux/slices/filterSlice";
import { toggleFavBook,deleteBook } from "../Redux/slices/booksSlice";
import { selectBooks } from "../Redux/slices/booksSlice";

function BookList() {
  const books = useSelector(selectBooks);
  const titleFilter = useSelector(selectTitleFilter);
  const authorFilter = useSelector(selectAuthorFilter);
  const favoriteFilter = useSelector(selectFavoriteFilter);

  const dispatch = useDispatch();
  const handleDelete = (bookId) => {
    dispatch(deleteBook(bookId));
  };
  const handleFavorite = (bookId) => {
    dispatch(toggleFavBook(bookId));
  };
  let filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(titleFilter.toLowerCase())
    )
    .filter((book) =>
      book.author.toLowerCase().includes(authorFilter.toLowerCase())
    );
  if (favoriteFilter) {
    filteredBooks = filteredBooks.filter((book) => book.isFav === true);
  }

  const highlightMatch = (text, filter) => {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((part, i) => {
      if (part.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {part}
          </span>
        );
      } return part;
    });
  };

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>

      {filteredBooks.length > 0 ? (
        <ul className="book-item">
          {filteredBooks.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {" "}
                {++i}. {highlightMatch(book.title, titleFilter)} by{" "}
                <b>{highlightMatch(book.author, authorFilter)}</b>,
                <i> {book.year}</i> ({book.source})
              </div>
              <div className="book-actions">
                {
                  <div
                    className="circle star-icon"
                    onClick={() => handleFavorite(book.id)}
                  >
                    {book.isFav ? <BsBookmarkHeartFill /> : <BsBookmarkHeart />}
                  </div>
                }

                <div onClick={() => handleDelete(book.id)} className="circle">
                  <MdOutlineDeleteForever className="delete-icon" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <h4>No books available</h4>
        </>
      )}
    </div>
  );
}

export default BookList;
