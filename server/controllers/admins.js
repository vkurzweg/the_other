var Admin = require("../models/admin");

module.exports = {
  create: create,
  // me:     me
};

function create(req, res, next) {
  console.log('create running')
  if (!req.body.password) {
    return res.status(422).send('Missing required fields');
  }
  Admin
    .create(req.body)
    .then(function(user) {
      res.json({
        success: true,
        message: 'Successfully created user.',
        data: {
          email: user.email,
          id:    user._id
        }
      })
    }).catch(function(err) {
      // if (err.message.match(/E11000/)) {
      //   err.status = 409;
      // } else {
      //   err.status = 422;
      // }
      next(err);
    });
};

// function me(req, res, next) {
//   Admin
//     .findOne({email: req.decoded.email}).exec()
//     .then(function(user) {
//       res.json({
//         success: true,
//         message: 'Successfully retrieved user data.',
//         data: user
//       });
//     })
//     .catch(function(err) {
//       next(err);
//     });
// };
