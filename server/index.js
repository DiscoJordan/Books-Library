const express = require("express");
const cors = require("cors");
const booksData = require("../client/src/books.json");

const app = express();
app.use(cors());

function getRandomBook(){
  const randomIndex = Math.floor(Math.random() * booksData.length);
  const randomBook = booksData[randomIndex];
  return randomBook;
};

app.get("/random-book", (req, res) => {
  res.json(getRandomBook());
});

app.get("/random-book-delayed", (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook());
  }, 1000);
});

const port = process.env.PORT || 4040;
app.listen(port, () => {
  console.log(`Server is listening port ${port}`);
});
