const mongoose =  require ('mongoose');

const specification = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

const Specification = mongoose.model()