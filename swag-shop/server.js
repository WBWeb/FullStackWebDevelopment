var express = require('express');
var bodyParser = require('body-parser');
var route = require('./routes');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop-api');

var Product = require('./model/product');
var WishList = require('./model/wishlist');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

app.get('/wishlist', function(request, response) {
	WishList.find({},function(err, wishlists) {
		
	});
});

app.post('/product', function(request,response) {
	var product  =  new Product();
	product.title = request.body.title;
	product.price = request.body.price;
	product.save(function(err, savedProduct) {
		if (err) {
			response.status(500).send({error: "Could not save product"});
		} else {
			response.status(200).send(savedProduct);
		}
	})
});

app.post('/wishlist', function(request,response) {
	var wishlist = new WishList();
	wishlist.title = request.body.title;

	wishlist.save(function(err, newWishlist) {
		if (err) {
			response.status(500).send({error: "Could not add item to wishlist"});
		} else {
			response.status(200).send(newWishlist);
		}
	})
});

app.listen(3000, function() {
    console.log("Swag Shop API running on port 3000...");
})