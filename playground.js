const mongoose = require('mongoose');
const { Menu } = require("./models");
const { foodItem } = require("./models")
const FoodItem = mongoose.model('foodItem')

const food = new FoodItem({
    name: "Mac and Cheese",
    description: "cheese and mac",
    price: 100,
});

// Menu.insertMany({
//     name: "Macaroni and Cheese",
//     menuItem: 1
// })
// .then((newMenuItem) => {
//     console.log(newMenuItem);
// })
// .catch((error) => {
//     console.log(error);
// });

// foodItem.insertMany({
//     name: "Macaroni and Cheese",
//     description: "noodles and cheese",
//     price: 12,
//     menuItem: 1
// })
// .then((newFoodItem) => {
//     console.log(newFoodItem);
// })
// .catch((error) => {
//     console.log(error);
// });

