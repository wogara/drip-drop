var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    product_id: Number,
    name: String,
    fullName: String,
    image: [String],
    secondImages: [String],
    price: Number,
    description: [String]
},{collection:'products'});

module.exports = mongoose.model("Product",productSchema);

