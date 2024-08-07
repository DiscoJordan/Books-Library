import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
        return state.filter((book) => book.id !== action.payload);
    },
    toggleFavBook: (state, action) => {
      state.map((book) =>
        book.id === action.payload ? (book.isFav = !book.isFav) : book
      );
    },
  },
});

export const { addBook, deleteBook, toggleFavBook } = booksSlice.actions;
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
