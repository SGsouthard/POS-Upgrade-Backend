const mongoose =  require ('mongoose');

const drinkItemSchema = new mongoose.Schema({
    _id: String,
    name: String,
    description: String,
    price: Number,
})

const DrinkItem = mongoose.model()