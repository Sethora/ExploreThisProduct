const express = require('express');
const cors = require('cors');
const {getMember, getMatchingImages, getProductsUsed} =  require('../database/index.js');
const bodyParser = require('body-parser');

const app = express()
const port = 2754

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/api/etp/member', (req, res) => {
  let memberId = req.query.memberId
  getMember(memberId)
    .then(results => {
      res.status(200).send(results);
    })
    .catch((err)=> {
      console.log(err);
      res.status(400).send(err);
    })
})

app.get('/api/etp/images', (req, res)=> {
  // let randomNumber = Math.floor(Math.random() * (20 - 1+ 1)) + 1;
  getMatchingImages()
  .then((results)=>{
    res.status(200).send(results)
  })
  .catch((err)=>{
    console.log(err)
    res.status(400).send(err)
  })
})

app.get('/api/etp/products', (req, res)=> {
  console.log(req.query.products)
  getProductsUsed(req.query.products)
  .then((results)=>{
    res.status(200).send(results)
  })
  .catch((err)=>{
  console.log(err)
  res.status(400).send(err)
  })
})

app.listen(port, (req, res, next) => {
  console.log(`Listening at http://localhost:${port}`)
})


module.exports = app;

// if (process.env.NODE_ENV !== 'test') {
//   app.listen(3000);
// }