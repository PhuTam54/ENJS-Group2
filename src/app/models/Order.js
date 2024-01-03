const mongoose = require('mongoose');
const Product = require('./Product'); // Import ProductSchema từ file Product.js
const User = require('./User'); // Import UserSchema từ file User.js

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    products: [Product.schema], // Sử dụng ProductSchema trong mảng products
    totalPrice: { type: Number },
    status: { type: Number },
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', OrderSchema);