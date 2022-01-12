const mongoose = require('mongoose');

//Food Items
const foodItem = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    foodType: Array,
    options: Array
})

//Drinks
const drinkItem = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    price: Number,
    foodType: Array,
    options: Array
})

//Food Types (alcohol, lunch, dinner?)
//Keeping just in case but will be including foodTypes inside the schema
const foodType = new mongoose.Schema({
    name: String,
});

//Specifications
const specificationDrink = new mongoose.Schema({
    name: String,
    price: Number,
})

const specificationFood = new mongoose.Schema({
    name: String,
    price: Number,
})

//menu base (The matryoshka doll)
const menuSchema = new mongoose.Schema({
    // name: String,
    foodItems: [foodItem],
    drinkItems: [drinkItem],
    foodTypes: [foodType],
    specificationDrinks: [specificationDrink],
    specificationFood: [specificationFood]
});
const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;