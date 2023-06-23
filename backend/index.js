const mongoose = require('mongoose');
const express = require('express');
mongoose.connect("mongodb://127.0.0.1:27017/myfirstdb").then(()=>console.log("Mongo connected succesfully")).catch(()=> console.log("Mongo error"));


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
