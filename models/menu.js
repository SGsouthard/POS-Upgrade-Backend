const mongoose = require('mongoose');

const foodItem = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
})
const menuSchema = new mongoose.Schema({
    name: String,
    foodItems: [foodItem]
});

const Menu = mongoose.model("Menu", menuSchema);


//Example for visual reminders

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});


const orderSchema = new mongoose.Schema({
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}]
});

const Order = mongoose.model('Order', orderSchema);

const Product = mongoose.model('Product', productSchema);

const product = new Product(
    {
    name: "holy water",
    price: 500
    }
)
product.save();
const order = new Order()
order.products.push(product)
order.save();

module.exports = Menu;