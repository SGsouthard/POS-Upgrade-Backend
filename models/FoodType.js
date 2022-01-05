const mongoose = require('mongoose');

const foodTypeSchema = new mongoose.Schema({
    name: String,
});

const FoodType = mongoose.model("FoodType", foodTypeSchema);

module.exports = FoodType;