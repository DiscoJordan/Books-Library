import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWithId from "../../utils/createBookWithId";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { setError } from "./errorSlice";

const initialState = [];

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
        thunkAPI.dispatch(setError(error.message))
        throw error
    }
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, "API"));
      }
    });
    builder.addCase(fetchBook.rejected, (state, action) => {});
  },
});

export const { addBook, deleteBook, toggleFavBook } = booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
