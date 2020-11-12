const express = require('express')
const db =  require('../database/index.js')
const bodyParser = require('body-parser');

const app = express()
const port = 2754

// app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
