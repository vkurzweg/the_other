var Artist = require("../models/artist");

//Show products
var index = function(req, res){
  Artist.find({}, function(err, artists){
    var products = artists.map(function(artist){
      return artist.products
    })
    products = products.reduce(function(a,b){
      return a.concat(b);
    }, []);
    res.json(products);

  })
}

//Show a product
var show = function(req, res){
  Artist.findOne({'products._id': req.params.productId}, function(err, artist){
    if (err) return res.status(401).json({msg: 'Failed to retrieve product'});
    res.status(200).json(artist.products.id(req.params.productId));
  });
}

//Create product
var create = function(req, res){
  Artist.findById(req.params.id, function(err, artist){
    if (err) return res.status(401).json({msg: 'Failed to save product'});
    artist.products.push(req.body);
    //save the product
    artist.save(function(err){
      var product = artist.products[artist.products.length - 1];
      res.status(201).json(product);
    });
 });
}

//Update product
var update = function(req, res){
  Artist.findOneAndUpdate(
    {'products._id' : req.params.id}, { '$set': { 'products.$' : req.body } }, function(err, artist) {
    console.log(artist);
    if (err) res.status(400).res.json(err);
    res.json(artist);
  })
}

//Delete a product
var del = function(req,res){
  Artist.findOne({'products._id': req.params.id}, function(err, artist){
    if (err) return res.json({msg: 'Failed to delete product'})
    artist.products.pull(req.params.id);
    artist.save(function(err){
      res.json(artist);
    });
  });
}

module.exports = {
  index:   index,
  show:    show,
  create:  create,
  update:  update,
  delete:  del
}
