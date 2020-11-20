const express = require('express')
const {getMember, getMatchingImages} =  require('../database/index.js')
const bodyParser = require('body-parser');

const app = express()
const port = 2754

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/member', (req, res) => {
  let memberId = req.query.memberId
  getMember(memberId)
    .then(results => {
      console.log(results);
      res.status(200).send(results);
    })
    .catch((err)=> {
      console.log(err);
      res.status(400).send(err);
    })
})

app.get('/images', (req, res)=> {
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

// if (process.env.NODE_ENV !== 'test') {
//   app.listen(3000);
// }

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})


module.exports = app;