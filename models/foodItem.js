const mongoose = require('mongoose');
const { INTEGER } = require('sequelize/dist');

const foodItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    menuItem: Number
});

const foodItem = mongoose.model("FoodItem", foodItemSchema);

module.exports = foodItem;