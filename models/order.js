const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    tableNumber: Number,
    order: String,
    orderTotal: Number
})

const OrderSchema = mongoose.model("OrderSchema", orderSchema)

module.exports = Order;