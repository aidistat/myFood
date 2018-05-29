var express = require('express');
var router = express.Router();

var orders = []

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { orders});
});

router.get('/form', function(req, res, next) {
	//console.log(req.query)
	res.render('form', {});
});

router.post('/form', function(req, res, next) {
	orders.push({
		name:req.body.client,
		food:req.body.foodName
	})

	res.render('form', {});
});


module.exports = router;
