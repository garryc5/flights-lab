var express = require('express');
var router = express.Router();
var flightCTRL = require('../controllers/flights');

/* GET users listing. */
router.get('/', flightCTRL.index);
router.get('/new',flightCTRL.new);
//router.post('/new',flightCTRL.create);
router.get('/:id',flightCTRL.show);
//router.delete('/:id',flightCTRL.delete);
//router.put('/:id',flightCTRL.update);

module.exports = router;
