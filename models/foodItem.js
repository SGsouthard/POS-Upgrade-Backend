const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);

module.exports = FoodItem;