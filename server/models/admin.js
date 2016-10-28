var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})

module.exports = mongoose.model('Admin', adminSchema);
