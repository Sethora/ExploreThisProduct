var db = require('mongoose');
var url = "mongodb://localhost/etp";

db.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

let memberSchema = db.Schema({
	Member_id: {type: Number, unique: true},
	Name: String,
	Skin_type: String
})

let productSchema = db.Schema({
	Product_id: {type: Number, unique: true},
	Brand: String,
	Description: String,
	Price: Number,
	Url: String
})

let imageSchema = db.Schema({
	Image_id: {type: Number, unique: true},
	Url: String,
	Member_id: String,
  Items_used: Array
})

let Member = db.model('Member', memberSchema);
let Product = db.model('Product', productSchema);
let Image = db.model('Image', imageSchema);

// Database Helper Functions
const memberCreate = (name, skin) => {
	Member.create({ Name: `${name}`, Skin_type: `${skin}` }, function (err, response) {
		if (err) {
			console.log(err)
		} else {
			console.log('Member Created')
		}
	});
};

const productCreate = (brand, description, price, url) => {
	Product.create({
		Brand: `${brand}`,
		Description: `${description}`,
		Price: `${price}`,
		Url: `${url}`}, function (err, response) {
			if (err) {
				console.log(err)
			} else {
				console.log('Product Created')
			}
	});
}

const imageCreate = (url, memberId, itemsArray) => {
	Image.create({
		Url: `${url}`,
		Member_id: `${memberId}`,
		Items_used: itemsArray
	})
}

module.exports.memberCreate = memberCreate;
module.exports.productCreate = productCreate;