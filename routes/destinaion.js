var express = require('express');
var router = express.Router();
var destinaionCTRL = require('../controllers/destinaion');

router.post('/flights/:id/destinaion', destinaionCTRL.create);


module.exports = router;
