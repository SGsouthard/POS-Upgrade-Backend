const mongoose =  require ('mongoose');

const specification = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    drinkMenuNumber: Number
})

const Specification = mongoose.model()