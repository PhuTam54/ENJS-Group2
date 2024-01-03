const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productSchema = new Schema({
   name: String,
   description: String,
   price: Number,
   category: String,
   brand: String,
   qty: String
});

module.exports = mongoose .model("Product", productSchema)