const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    seats: Number
})

const OrderSchema = mongoose.model("OrderSchema", orderSchema)

module.exports = Order;