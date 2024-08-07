const express = require ('express')
const cors = require ('cors')
const booksData = require ('../client/src/books.json')

const app = express()
app.use(cors());

app.get('/random-book', (req,res)=>{
    const randomIndex = Math.floor(Math.random()* booksData.length)
    const randomBook = booksData[randomIndex]
    res.json(randomBook)
})

const port = process.env.PORT||4040;
app.listen(port,()=>{
    console.log(`Server is listening port ${port}`);
})