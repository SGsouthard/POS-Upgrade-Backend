const mongoose = require('mongoose');
const { Menu, FoodType, FoodItem } = require("./models");


// Menu.drinkItem.insertMany([
//     { name: "Latte", description: "Two shots of espresso topped with steamed milk and foam", price: 5 },
//     { name: "Cappuccino", description: "Two shots of espresso topped with foam", price: 5 },
//     { name: "Americano", description: "Two shots of espresso with hot water", price: 3 },
//     { name: "Mocha", description: "Two shots of espresso mixed with chocolate syrup, topped with steamed milk and whipped cream", price: 5 },
// ])
// .then(function() {
//     console.log("Data inserted")
// })
// .catch(function(error) {
//     console.log(error)
// })

// const food = new FoodItem({
//     name: "Mac and Cheese",
//     description: "cheese and mac",
//     price: 100,
// });

// food.save()
// console.log(food);

// const drink = new drinkItem({
//     name: "Mac and Cheese",
//     description: "cheese and mac",
//     price: 100,
// });

// drink.save()
// console.log(drink);
