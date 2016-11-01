var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');
var token = require('../config/token.auth');

router.post('/login', token.create);

module.exports = router;
