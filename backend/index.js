const express = require('express')
const app = express()
const port = 3000
const cors=require("cors");
const mongoose = require('mongoose');
require('dotenv').config()

app.use(express.json());
app.use(cors({
   origin:['http://localhost:5173'],
   credentials:true
}))
const bookroutes=require('./src/books/book.route')
app.use("/api/books",bookroutes)
async function main() {
    await mongoose.connect(process.env.DB_url);
    app.get('/', (req, res) => {
        res.send('Hello World!')
      })
  }

  main().then(()=>console.log("hdsdsd")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//XkbnZkDNhb1fh3aD