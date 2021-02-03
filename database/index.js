const db = require('mongoose');
const url = 'mongodb://localhost/etp';

db.connect(url, { useNewUrlParser: true, useCreateIndex: true })
  .then(result => console.log('Database connected '))
  .catch(err => console.log('connection error ', err));

let memberSchema = new db.Schema({
  Member_id: {type: Number, unique: true},
  Name: String,
  Skin_type: String,
  PrimaryId: Number
});

let productSchema = new db.Schema({
  Product_id: {type: Number, unique: true},
  Brand: String,
  Description: String,
  Price: Number,
  Url: String,
  PrimaryId: Number
});

let imageSchema = new db.Schema({
  Image_id: {type: Number, unique: false},
  Url: String,
  Member_id: Number,
  Items_used: Array
});

let Member = new db.model('Member', memberSchema);
let Product = new db.model('Product', productSchema);
let Image = new db.model('Image', imageSchema);

db.connect(url, { useNewUrlParser: true, useCreateIndex: true })
  .then(result => console.log('Database connected '))
  .catch(err => console.log('connection error ', err));

module.exports = {
  Member,
  Product,
  Image
};
