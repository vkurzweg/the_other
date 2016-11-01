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
  Artist.findById(req.params.artistId, function(err, artist){
    if (err) return res.status(401).json({msg: 'Failed to save product'});
    artist.products.push(req.body);
    //save the product
    artist.save(function(err){
      res.status(201).json(artist);
    });
 });
}

//Update product
var update = function(req, res){
  Artist.findOne({'products._id': req.params.productId}, function(err, artist){
    if (err) return res.json({msg: 'Failed to update product'})
    // set the new product information if it exists in the request
    if (req.body.name)  artist.product.name  = req.body.name;
    if (req.body.medium) artist.product.medium = req.body.medium;
    if (req.body.description) artist.product.description = req.body.description;
    if (req.body.price) artist.product.price = req.body.price;
    if (req.body.image) artist.product.image = req.body.image;
    // save the product
    artist.product.save(function(err, updatedProduct) {
      if (err) return res.status(401).json({msg: 'Failed to update product'});
      // return the product
      res.json(updatedProduct);
    });
  });
}

//Delete a product
var del = function(req,res){
  Artist.findOne({'products._id': req.params.productId}, function(err, artist){
    if (err) return res.json({msg: 'Failed to delete product'})
    artist.product(req.params.productId).remove();
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
