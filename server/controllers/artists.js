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
    res.status(201).json(trip);
 });
}

var update = function(req, res){
  Artist.findbyId(req.params.id, function(err, artist){
    if (err) return res.status(401).json({msg: 'Failed to update artist'});
    //set the new artist info if it exists in the request
    if (req.body.name) artist.name = req.body.name;
    if (req.body.bio) artist.bio = req.body.bio;
    if (req.body.image) artist.image = req.body.image;
    //save the artist
    artist.save(function(err, updatedArtist){
      if (err) {
        res.send(err);
      }
      res.json(updatedArtist);
    })
  })
}

var del = function(req, res){
  Artist.findByIdAndRemove(req.params.id, function(err, artist){
    if (err) return res.status(401).json({msg: 'Failed to delete artist'});
    res.json(artists);
  });
}

module.exports = {
  index:   index,
  show:    show,
  create:  create,
  update:  update,
  delete:  del
}
