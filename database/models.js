const {Member, Product, Image} = require('./index');
// Create Member Document
const memberCreate = (name, skin, id) => {
  Member.create({ Name: `${name}`, Skin_type: `${skin}`, PrimaryId: `${id}`}, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Member Created');
    }
  });
};
// Create Product Document
const productCreate = (brand, description, price, url, id) => {
  Product.create({
    Brand: `${brand}`,
    Description: `${description}`,
    Price: `${price}`,
    Url: `${url}`,
    PrimaryId: `${id}`}, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Product Created');
    }
  });
};
// Create Image Document
const imageCreate = (url, memberId, itemsArray) => {
  Image.create({
    Url: `${url}`,
    Member_id: `${memberId}`,
    Items_used: itemsArray
  }, function (err, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Image Created');
    }
  });
};
// Get Member Function
const getMember = (id) => {
  return Member.find({PrimaryId: id});
};
// Get matching images by product
const getMatchingImages = (productId) => {
  return Image.find({Items_used: productId});
};
// Get all products used for image
const getProductsUsed = (array) => {
  const products = array;
  return Product.find({ PrimaryId: { $in: products } });
};

module.exports = {
  memberCreate,
  productCreate,
  imageCreate,
  getMember,
  getMatchingImages,
  getProductsUsed
};