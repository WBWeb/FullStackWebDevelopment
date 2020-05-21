var app = require('express').Router();

app.get('/product', function(request, response) {
	Product.find({}, function(err, products) {
		if (err) {
			response.status(500).send({error: "Could not fetch products"});
		} else {
			response.send(products);
		}
	})
	response.send();
});

module.exports = app;