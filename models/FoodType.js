const mongoose = require('mongoose');

const foodTypeSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    price: Number,
});

const FoodType = mongoose.model("FoodType", foodTypeSchema);

module.exports = FoodType;