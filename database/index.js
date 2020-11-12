var mongoose = require('mongoose');
var faker = require('faker');
var url = "mongodb://localhost/etp";

mongoose.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

let memberSchema = mongoose.Schema({
	Member_id: {type: Number, unique: true},
	Name: String,
	Skin_type: String
})

let productSchema = mongoose.Schema({
	Product_id: {type: Number, unique: true},
	Brand: String,
	Description: String,
	Price: Number,
	Url: String
})

let imageSchema = mongoose.Schema({
	Image_id: {type: Number, unique: true},
	Url: String,
	Member_id: String,
  Items_used: Array
})

let Member = mongoose.model('Member', memberSchema);
let Product = mongoose.model('Product', productSchema);
let Image = mongoose.model('Image', imageSchema);

// Member.create({ Name: 'Bianca', Skin_type: 'Bronze' }, function (err, small) {
//   if (err) return handleError(err);
//   // saved!
// });