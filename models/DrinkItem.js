const mongoose =  require ('mongoose');

const drinkItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
})

const DrinkItem = mongoose.model("DrinkItem", drinkItemSchema)

module.exports = DrinkItem;