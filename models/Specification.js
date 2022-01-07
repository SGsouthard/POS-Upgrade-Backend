const mongoose =  require ('mongoose');

const specificationSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

const Specification = mongoose.model("Specification", specificationSchema)

module.exports = Specification;