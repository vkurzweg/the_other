var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var productSchema = new mongoose.Schema({
  name: String,
  medium: String,
  description: String,
  price: Number
});

var artistSchema = new mongoose.Schema({
  name: String,
  bio: String,
  products: [productSchema]
})

module.exports = mongoose.model('Artist', artistSchema);
