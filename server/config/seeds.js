require('dotenv').config();
var mongoose = require('./database');

var Artist = require('../models/artist');
var Admin = require('../models/admin');

var artists = [
  {
    name: 'Aaron Freshour',
    bio: 'Lorem ipsum dolor sit amet, quo suas justo graecis te. An possit admodum disputando nam. Et duo equidem offendit democritum, qui ea dicat accusam. Dolorum percipit te cum, his in etiam facilis. Has ea debet interpretaris, meis aeque ad pri. Te mel iusto suscipiantur. Nemore voluptua elaboraret duo ne, an mel vidit primis appellantur.',
    image: '/images/AF_Portrait.jpg',
    products: [{
        name: 'Wallpaper 2',
        medium: 'Wallpaper',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/AF_Wallpaper_2.jpg'
      },
      {
        name: 'Wallpaper 3',
        medium: 'Wallpaper',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/AF_Wallpaper_3.jpg'
      }]
  },

  {
    name: 'Brian Mendez',
    bio: 'Lorem ipsum dolor sit amet, quo suas justo graecis te. An possit admodum disputando nam. Et duo equidem offendit democritum, qui ea dicat accusam. Dolorum percipit te cum, his in etiam facilis. Has ea debet interpretaris, meis aeque ad pri. Te mel iusto suscipiantur. Nemore voluptua elaboraret duo ne, an mel vidit primis appellantur.',
    image: '/images/BM_Portrait.jpg',
    products: [{
        name: 'Work',
        medium: 'Canvas',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/BM_Product_1_Detail.jpg'
      },
      {
        name: 'Work',
        medium: 'Canvas',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/BM_Product_2.jpg'
      },
      {
        name: 'Wallpaper 1',
        medium: 'Wallpaper',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/BM_Wallpaper_1.jpg'
      }]
  },

  {
    name: 'Paige Smith',
    bio: 'Lorem ipsum dolor sit amet, quo suas justo graecis te. An possit admodum disputando nam. Et duo equidem offendit democritum, qui ea dicat accusam. Dolorum percipit te cum, his in etiam facilis. Has ea debet interpretaris, meis aeque ad pri. Te mel iusto suscipiantur. Nemore voluptua elaboraret duo ne, an mel vidit primis appellantur.',
    image: '/images/PS_Portrait.jpg',
    products: [{
        name: 'Wallpaper_1',
        medium: 'Wallpaper',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/PS_Wallpaper_1.jpg'
      },
      {
        name: 'Wallpaper_2',
        medium: 'Wallpaper',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/PS_Wallpaper_2.jpg'
      }]
  },

  {
    name: 'Yuval Pudik',
    bio: 'Lorem ipsum dolor sit amet, quo suas justo graecis te. An possit admodum disputando nam. Et duo equidem offendit democritum, qui ea dicat accusam. Dolorum percipit te cum, his in etiam facilis. Has ea debet interpretaris, meis aeque ad pri. Te mel iusto suscipiantur. Nemore voluptua elaboraret duo ne, an mel vidit primis appellantur.',
    image: '/images/YP_Portrait.jpg',
    products: [{
        name: 'Work',
        medium: 'Wallpaper',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/YP_Product_1.png'
      },
      {
        name: 'Wallpaper_1',
        medium: 'Wallpaper',
        description: 'An possit admodum disputando nam.',
        price: 99,
        image: '/images/YP_Wallpaper_1.jpg'
      }]
  }

]

var admins = [
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

Admin.remove({}, function(err) {
  if (err) console.log(err);
  Admin.create(admins, function(err, admins) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + admins.length  + " admins.");
      mongoose.connection.close();
    }
    process.exit();
  });
});


