const mongoose = require('mongoose');

const foodTypeSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
});

const FoodType = mongoose.model("FoodType", foodTypeSchema);

module.exports = FoodType;