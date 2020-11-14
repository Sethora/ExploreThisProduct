const express = require('express')
const {getMember} =  require('../database/index.js')
const bodyParser = require('body-parser');

const app = express()
const port = 2754

// app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/member', (req, res) => {
  getMember()
    .then(results => {
      console.log(results);
      res.status(200).send(results);
    })
    .catch((err)=> {
      console.log(err);
      res.status(400).send(err);
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})
