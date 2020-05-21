var mongoose = require('mongoose');
var schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishList = new schema({
	title: {type: String, default: "Cool Wishlist"},
	products: [{type: ObjectId, ref: 'Product'}]
});

module.exports = mongoose.model('WishList', wishList);