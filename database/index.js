var db = require('mongoose');
var url = "mongodb://localhost/etp";

db.connect(url, function(err, db) {
  if (err) throw err;
	console.log("Database created!");
});

let memberSchema = new db.Schema({
	Member_id: {type: Number, unique: true},
	Name: String,
	Skin_type: String,
	PrimaryId: Number
})

let productSchema = new db.Schema({
	Product_id: {type: Number, unique: true},
	Brand: String,
	Description: String,
	Price: Number,
	Url: String,
	PrimaryId: Number
})

let imageSchema = new db.Schema({
	Image_id: {type: Number, unique: true},
	Url: String,
	Member_id: String,
	Items_used: Array
})

let Member = new db.model('Member', memberSchema);
let Product = new db.model('Product', productSchema);
let Image = new db.model('Image', imageSchema);

// Database Helper Functions

// Create Member Document
const memberCreate = (name, skin, id) => {
	Member.create({ Name: `${name}`, Skin_type: `${skin}`, PrimaryId: `${id}`}, function (err, response) {
		if (err) {
			console.log(err)
		} else {
			console.log('Member Created')
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
				console.log(err)
			} else {
				console.log('Product Created')
			}
	});
}
// Create Image Document
const imageCreate = (url, memberId, itemsArray) => {
	Image.create({
		Url: `${url}`,
		Member_id: `${memberId}`,
		Items_used: itemsArray
	}, function (err , response) {
		if(err) {
			console.log(err)
		} else {
			console.log('Image Created')
		}
	})
}
// Get Member Function
const getMember = (id) =>  {
	return Member.find({PrimaryId: id});
}
// Get matching images by product
const getMatchingImages = (productId) => {
	// return Image.find({Items_used: productId})
	return Image.find({}).limit(10)
}
// Get all products used for image
const getProductsUsed = (array) => {
	const products = array
	return Product.find({ PrimaryId: { $in: products } })
}

module.exports = {
	memberCreate,
	productCreate,
	imageCreate,
	getMember,
	getMatchingImages,
	getProductsUsed
}


