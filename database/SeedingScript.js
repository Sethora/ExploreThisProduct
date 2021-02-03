const faker = require('faker');
const {memberCreate, productCreate, imageCreate} = require('./index.js');

// Random Number Generator
const randomNumberGenerator = (max) => {
  return Math.floor(Math.random() * (max - 1 + 1)) + 1;
};
//Product Images
const prouductImageGenerator = () => {
  let randomNumber = Math.floor(Math.random() * (11 - 1 + 1)) + 1;
  let url = `https://quesbucket.s3.us-east-2.amazonaws.com/Module+Photos/product${randomNumber}.jpg`;
  return url;
};
// Member Images
const memberImageGenerator = () => {
  let randomNumber = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  let url = `https://quesbucket.s3.us-east-2.amazonaws.com/Module+Photos/woman${randomNumber}.jpg`;
  return url;
};
// Product Document Creation
for (let i = 0; i < 100; i += 1) {
  const Brand = faker.commerce.productName();
  const Description = faker.commerce.productDescription();
  const Price = faker.commerce.price();
  const Url = prouductImageGenerator();
  const PrimaryId = i;
  productCreate(Brand, Description, Price, Url, PrimaryId);
}
//Member Document Creation
for (let i = 0; i < 100; i += 1) {
  const Name = faker.internet.userName();
  const Skin_type = faker.vehicle.color();
  const PrimaryId = i
  memberCreate(Name, Skin_type, PrimaryId);
}
// // Image Document  Creation
for (let i = 0; i < 100; i += 1) {
  const Url = memberImageGenerator();
  const Member_id = randomNumberGenerator(100);
  const Items_used = [randomNumberGenerator(100), randomNumberGenerator(100), randomNumberGenerator(100), randomNumberGenerator(100), randomNumberGenerator(100)];
  imageCreate(Url, Member_id, Items_used );
}