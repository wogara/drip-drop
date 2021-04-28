var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    products: [String],
    address: String,
    city: String,
    zip: String,
    id: String,
    total: Number,
    completed: String
},{strict:false,strictQuery:false});

module.exports = mongoose.model("Order",orderSchema);
