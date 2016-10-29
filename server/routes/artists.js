var express = require('express');
var router = express.Router();

var ArtistsCtrl = require('../controllers/artists')


router.get('/artists',        ArtistsCtrl.index);
router.get('/artists/:id',    ArtistsCtrl.show);
router.post('/artists',       ArtistsCtrl.create);
router.put('/artists/:id',    ArtistsCtrl.update);
router.delete('/artists/:id', ArtistsCtrl.del);

module.exports = router;
