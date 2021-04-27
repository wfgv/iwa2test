const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.get('/hello', itemCtrl.postWorld);

module.exports = router;