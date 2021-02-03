const cors = require('cors');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const {getMember, getMatchingImages, getProductsUsed} = require('../database/models');

const app = express();
const port = 2754;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/items/images/:id', (req, res)=> {
  const candidateId = req.params.id || 2;
  const productId = (isNaN(Number(candidateId)) || candidateId === '') ? 2 : Number(candidateId);

  getMatchingImages(productId)
    .then((results)=>{
      res.status(200).send(results);
    })
    .catch((err)=>{
      console.log(err);
      res.status(400).send(err);
    });
});

app.get('/api/items/member/:id', (req, res) => {
  const memberId = req.params.id;
  getMember(memberId)
    .then(results => {
      res.status(200).send(results);
    })
    .catch((err)=> {
      console.log(err);
      res.status(400).send(err);
    });
});

app.get('/api/items/:ids', (req, res)=> {
  const productIds = req.params.ids.split(',').map(el => Number(el));
  getProductsUsed(productIds)
    .then((results)=>{
      res.status(200).send(results);
    })
    .catch((err)=>{
      console.log(err);
      res.status(400).send(err);
    });
});

app.get('/*/:id?', (req, res, next) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));

app.listen(port, (req, res, next) => {
  console.log(`Listening at http://localhost:${port}`);
});


module.exports = app;

