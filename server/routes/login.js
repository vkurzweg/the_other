var express = require('express');
var router = express.Router();

var LoginCtrl = require('../controllers/login');

router.get('/login', LoginCtrl.index);
router.post('/login', LoginCtrl.index);


module.exports = router;
