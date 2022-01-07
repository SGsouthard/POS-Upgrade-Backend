const mongoose = require('mongoose');
const { Menu, FoodType, FoodItem } = require("./models");

// Menu.findOne()
// .then((menu) => {
//     console.log(menu);
//     menu.drinkItems.push({
//         name: "Hot Chocolate",
//         description: "Hot chocolate mixed with whipped cream",
//         price: 6000000000
//     })
//     menu.save()
// })

//find ALL the menus
// Menu.find({})
// .then((menus) => {
//     console.log(menus);
// })

// Menu.find({foodItem})
// .then((food) => {
//     console.log(food);
// })

//delete whole menu
// Menu.findByIdAndDelete(
//     "61d4d14c84b51f5451b558fe",
//     function (err, docs) {
//         if (err){
//             console.log(err)
//         }
//         else{
//             console.log("Deleted : ", docs);
//         }
//     }
// );

////Whole Menu
const menu = new Menu({
    name: Menu,
    foodItems: [
        
        {
            name: "Caprese Sandwich",
            description: "tomatoes, mozarella and pesto spread on two a baguette",
            price: 8,
            foodType: "",
        },
        {
            name: "Croissant",
            description: "flaky and buttery, fresh baked every morning",
            price: 4,
            foodType: "",
        },
        {
            name: "Biscotti",
            description: "crunchy and sweet, perfect for dipping in your coffee",
            price: 3,
            foodType: "",
        },
        {
            name: "Curry",
            description: "fire spicy goodness",
            price: 4,
            foodType: "",
        }
    ],
    drinkItems: [
        {
           name: "Latte",
           description: "Two shots of Espresso, steamed milk topped with foam",
           price: 6,
           foodType: "", 
        },
        {
            name: "Cappuccino",
            description: "One shot of Espresso, a little steamed milk topped with foam",
            price: 6,
            foodType: "", 
        },
        {
            name: "Americano",
            description: "Two shots of espresso with hot water",
            price: 4,
            foodType: "", 
        },
        {
            name: "boba",
            description: "yummy sweet pearls",
            price: 5,
            foodType: "",
        }
        

    ],
    // foodTypes: [
    //     {
    //         name: "Coffee"
    //     },
    //     {
    //         name: "Sandwich"
    //     },
    //     {
    //         name: "Pastry"
    //     },
    //     {
    //         name: "Beverage"
    //     },
    // ],
    specificationDrinks: [
        {
            name: "No Sugar",
            price: 0,
        },
        {
            name: "Iced",
            price: 1,
        },
        {
            name: "Half Sugar",
            price: 0,
        },
        {
            name: "Caffeine Free",
            price: 0,
        },
    ],
    specificationFood: [
        {
            name: "Allergen",
            price: 0,
        },
        {
            name: "Vegetarian",
            price: 0,
        },
        {
            name: "Gluten-Free",
            price: 0,
        },
        {
            name: "Keto",
            price: 0,
        },
    ]

})
menu.save()
console.log(menu);

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
