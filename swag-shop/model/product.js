var mongoose = require('mongoose');
var schema = mongoose.Schema;

var product = new schema({
    title: String,
    price: Number,
    likes: {type: Number, default: 0}
});

module.exports = mongoose.model('Product', product);