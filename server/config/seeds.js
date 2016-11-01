require('dotenv').config();
var mongoose = require('./database');

var Artist = require('../models/artist');
var Admin = require('../models/admin');

var artists = [
  {
    name: 'Artist',
    bio: 'Four loko humblebrag normcore, tilde locavore distillery venmo snackwave cardigan waistcoat vinyl single-origin coffee kale chips fap. Hot chicken tousled four loko disrupt blog, quinoa gochujang synth austin iceland activated charcoal cornhole keffiyeh woke.',
    image: '/images/img/artist_test.jpg',
    products: [{
        name: 'Work',
        medium: 'Sculpture',
        description: 'Subway tile single-origin coffee literally pickled.',
        price: 99,
        image: '/images/img/test_image1.jpg'
      }]
  },

  {
    name: 'Artist',
    bio: 'Next level jianbing post-ironic slow-carb, retro celiac lo-fi occupy. Health goth seitan poke glossier actually, copper mug dreamcatcher butcher williamsburg bicycle rights vegan.',
    image: '/images/img/artist_test2.png',
    products: [{
        name: 'Work',
        medium: 'Mixed Media',
        description: 'Lomo iceland echo park retro.',
        price: 113,
        image: '/images/img/test_image2.jpg'
      }]
  },

  {
    name: 'Artist',
    bio: 'Quinoa etsy meh, sartorial squid fanny pack tofu coloring book thundercats polaroid vape letterpress kickstarter banh mi before they sold out.',
    image: '/images/img/artist_test3.jpg',
    products: [{
        name: 'Work',
        medium: 'Performance',
        description: 'Hoodie wolf letterpress, try-hard venmo portland artisan paleo.',
        price: 113,
        image: '/images/img/test_image3.jpg'
      }]
  }
]

var admin = [
  {name: 'Admin',
  email: 'othermessage@me.com',
  password: 'admin'}
]

Artist.remove({}, function(err) {
  if (err) console.log(err);
  Artist.create(artists, function(err, artists) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + artists.length  + " artists.");
      mongoose.connection.close();
    }
    process.exit();
  });
});

