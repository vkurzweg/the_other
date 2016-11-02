var express = require('express');
var router = express.Router();
var adminCtrl = require('../controllers/admins');
var token = require('../config/token.auth');

router.post('/signup', adminCtrl.create);
router.post('/login', token.create);

module.exports = router;
