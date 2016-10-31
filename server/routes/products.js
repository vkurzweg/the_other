var express = require('express');
var router = express.Router();

var ProductsCtrl = require('../controllers/products')


router.get('/products',              ProductsCtrl.index);
router.get('/products/:id',          ProductsCtrl.show);
router.post('/artists/:id/products', ProductsCtrl.create);
router.put('/products/:id',          ProductsCtrl.update);
router.delete('/products/:id',       ProductsCtrl.delete);

module.exports = router;
