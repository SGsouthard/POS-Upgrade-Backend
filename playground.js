const mongoose = require('mongoose');
const { Menu, FoodType, FoodItem, Specification, DrinkItem } = require("./models");



////Whole Menu
// const menu = new Menu({
//     name: Menu,
//     foodItems: [
        
//         {
//             name: "Caprese Sandwich",
//             description: "tomatoes, mozarella and pesto spread on two a baguette",
//             price: 8,
//         },
//         {
//             name: "Croissant",
//             description: "flaky and buttery, fresh baked every morning",
//             price: 4,
//         },
//         {
//             name: "Biscotti",
//             description: "crunchy and sweet, perfect for dipping in your coffee",
//             price: 3,
//         },
//         {
//             name: "Curry",
//             description: "fire spicy goodness",
//             price: 4,
//         }
//     ],
//     drinkItems: [
//         {
//            name: "Latte",
//            description: "Two shots of Espresso, steamed milk topped with foam",
//            price: 6, 
//         },
//         {
//             name: "Cappuccino",
//             description: "One shot of Espresso, a little steamed milk topped with foam",
//             price: 6, 
//         },
//         {
//             name: "Americano",
//             description: "Two shots of espresso with hot water",
//             price: 4, 
//         },
//         {
//             name: "boba",
//             description: "yummy sweet pearls",
//             price: 5,
//         }
        

//     ],
//     foodTypes: [
//         {
//             name: "Coffee"
//         },
//         {
//             name: "Sandwich"
//         },
//         {
//             name: "Pastry"
//         },
//         {
//             name: "Beverage"
//         },
//     ],
//     specificationDrinks: [
//         {
//             name: "No Sugar",
//             price: 0,
//         },
//         {
//             name: "Iced",
//             price: 1,
//         },
//         {
//             name: "Half Sugar",
//             price: 0,
//         },
//         {
//             name: "Caffeine Free",
//             price: 0,
//         },
//     ],
//     specificationFood: [
//         {
//             name: "Allergen",
//             price: 0,
//         },
//         {
//             name: "Vegetarian",
//             price: 0,
//         },
//         {
//             name: "Gluten-Free",
//             price: 0,
//         },
//         {
//             name: "Keto",
//             price: 0,
//         },
//     ]

// })
// menu.save()
// console.log(menu);

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
