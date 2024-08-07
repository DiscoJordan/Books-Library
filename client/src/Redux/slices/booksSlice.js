import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import createBookWithId from "../../utils/createBookWithId";
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
export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:4040/random-book");
    if (res) {
      dispatch(addBook(createBookWithId(res.data, "API")));
    }
  } catch (error) {
    console.log(error);
  }
};
export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
