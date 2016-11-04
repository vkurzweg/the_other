var Artist = require("../models/artist");

//Show artists
var index = function(req, res){
  Artist.find({}, function(err, artists) {
    console.log(err, artists);
    if (err) return res.status(401).json({msg: 'Failed to retrieve artists'});
    // return the artists
    res.status(200).json(artists);
  });
}

//Show an artist
var show = function(req, res){
  Artist.findById(req.params.id).exec(function(err, trip){
   if (err) return res.status(401).json({msg: 'Failed to retrieve artist'});
    res.status(200).json(artist);
  });
}

var create = function(req, res){
  var artist = new Artist();
  artist.name = req.body.name;
  artist.bio = req.body.bio;
  artist.image = req.body.image;
  artist.products = [];
  artist.save(function(err, artist){
    if (err) return res.status(401).json({msg: 'Failed to save artist'});
    res.status(201).json(artist);
 });
}

var update = function(req, res){
  Artist.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, updatedArtist) {
    if (err) res.status(400).res.json(err);
    res.json(updatedArtist);
  });
}

var del = function(req, res){
  var id = req.params.id;
  Artist.remove({'_id': id}, function(err) {
    if (err) return res.status(401).json({msg: 'Failed to delete artist'});
    res.json();
  });
}


module.exports = {
  index:   index,
  show:    show,
  create:  create,
  update:  update,
  delete:  del
}
