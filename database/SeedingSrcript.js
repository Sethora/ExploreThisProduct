const faker = require('faker');
const db = require('./index.js')

//Product Images
const prouductImageGenerator = () => {
  let randomNumber = Math.floor(Math.random() * (6 - 1+ 1)) + 1;
  let url = `https://quesbucket.s3.us-east-2.amazonaws.com/Module+Photos/woman${randomNumber}.jpg`
  return url;
};
// Member Images
const memberImageGenerator = () => {
  let randomNumber =  Math.floor(Math.random() * (5 - 1+ 1)) + 1;
  let url = `https://quesbucket.s3.us-east-2.amazonaws.com/Module+Photos/product${randomNumber}.jpg`
  return url;
};

//Document Storage
const products = [];
const members = [];

for (let i = 0; i < 3; i += 1) {
  const Brand = faker.commerce.productName();
  const Description = faker.commerce.productDescription();
  const Price = faker.commerce.price();
  const Url = prouductImageGenerator();
  db.productCreate(Brand,Description, Price, Url)
};


for (let i = 0; i < 5; i += 1) {
  const Name = faker.internet.userName();
  const Skin_type = faker.vehicle.color();
  db.memberCreate(Name,Skin_type)
};


// let images = [];
// for (let i = 0; i < 5; i += 1) {
//   const URL = 'test URl string'; // pull URL from S3 array
//   const Member_id = '';

// }


