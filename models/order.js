const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    tableNumber: Number,
    order: Array,
    orderTotal: Number
})

const OrderSchema = mongoose.model("OrderSchema", orderSchema)

module.exports = Order;