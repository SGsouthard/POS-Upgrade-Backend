const mongoose = require("mongoose");
const { Menu, FoodType, FoodItem } = require("./models");

const express = require("express");
const { Menu } = require("./models");
const mongoose = require("mongoose");
const app = express();

// just some stuff i found

// app.get("/menu", async (request, response) => {
//   try {
//     const menuArray = await Menu.find({
//       foodType: "Dessert",
//     });
//     response.json({ menuArray });
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// attempt 2 using the collection name
// app.get("/try", async (request, response) => {
//     try {
//       const menuArray = db.Group-Project-POS.find({
//         foodType: {
//           $all: ["Dessert"],
//         },
//       });
//       response.json({ menuArray });
//       console.log(menuArray);
//     } catch (error) {
//       response.status(500).send(error);
//     }
//   });

// db.Group-Project-POS.find({
//     foodType: {
//       $all: ["Dessert"],
//     },
//   });

  // renaming a collection 
                                // name you want // name incase it doesnt work optional
//   db.collection.renameCollection(target, dropTarget);

  db.Group-Project-POS.renameCollection(GroupPos, dropTarget);

// const foodID = "61d8b30315065167b99ec90d"
// Menu.findByIdAndUpdate(foodID,
//     {
//         category: "Sandwich",
//         specifications: ["Half", "Full"]
//     })

// Menu.findOne()
// .then((menu) => {
//     menu.specificationDrinks.push(
//         {
//         name: "Extra Flavor",
//         price: 1
//         }
//    )
//     menu.save()
//     console.log(menu.specificationDrinks);
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
//     "61d7393111709dbcd1daa279",
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
// const menu = new Menu({
//     name: Menu,
//     foodItems: [

//         {
//             name: "Caprese Sandwich",
//             category: "Sandwich",
//             description: "tomatoes, mozarella and pesto spread on two a baguette",
//             price: 8,
//             foodType: ["Food", "Lunch", "Sandwich", "Vegetarian"],
//             options: ["Half", "Full"]
//         },
//         {
//             name: "Club Sandwich",
//             category: "Sandwich",
//             description: "Smoked turkey, black forest ham, bacon, cheddar, tomato, red onion, lettuce, mayonnaise, and dijon mustard served served on fresh baked bread",
//             price: 8,
//             foodType: ["Food", "Lunch", "Dinner", "Sandwich"],
//             options: ["Half", "Full"]
//         },
//         {
//             name: "BLT",
//             category: "Sandwich",
//             description: "Bacon, Lettuce, Tomato, and Mayonnaise. Served on fresh baked bread",
//             price: 8,
//             foodType: ["Food", "Lunch", "Dinner", "Sandwich"],
//             options: ["Half", "Full"]
//         },
//         {
//             name: "Turkey Melt",
//             category: "Sandwich",
//             description: "Smoked Turkey, Cheddar Cheese, Tomato, and Lettuce on the side. Served on Foccacia Bread",
//             price: 8,
//             foodType: ["Food", "Lunch", "Dinner", "Sandwich"],
//             options: ["Half", "Full"]
//         },
//         {
//             name: "Cheesecake",
//             category: "Dessert",
//             description: "A single slice of delicious, smooth cheesecake",
//             price: 5,
//             foodType: ["Food", "Dessert", "Vegetarian"],
//             options: ["1 scoop of vanilla ice-cream", "1 scoop of chocolate ice-cream", "1 scoop of strawberry ice-cream"]
//         },
//         {
//             name: "Tieramisu",
//             category: "Dessert",
//             description: "Ladyfingers soaked in coffee and rum, topped with fresh cream and espresso",
//             price: 7,
//             foodType: ["Food", "Dessert", "Vegetarian"],
//             options: ["1 scoop of vanilla ice-cream", "1 scoop of chocolate ice-cream", "1 scoop of strawberry ice-cream"]
//         },
//         {
//             name: "Chocolate Chip Cookie",
//             category: "Dessert",
//             description: "A large, fresh baked chocolate chip cookie",
//             price: 3,
//             foodType: ["Food", "Lunch", "Dinner", "Sandwich"],
//             options: ["1 scoop of vanilla ice-cream", "1 scoop of chocolate ice-cream", "1 scoop of strawberry ice-cream"]
//         },
//         {
//             name: "Biscotti",
//             category: "Dessert",
//             description: "crunchy and sweet, perfect  for dipping in your coffee",
//             price: 3,
//             foodType: ["Food", "Dessert", "Pastry"],
//             options: ["1 scoop of vanilla ice-cream", "1 scoop of chocolate ice-cream", "1 scoop of strawberry ice-cream"]
//         }
//     ],
//     drinkItems: [
//         {
//            name: "Latte",
//            category: "Drink",
//            description: "Two shots of Espresso, steamed milk topped with foam",
//            price: 6,
//            foodType: ["Drink", "Coffee"],
//            options: ["Small", "Medium", "Large", "In House", "ToGo"]
//         },
//         {
//             name: "Cappuccino",
//             category: "Drink",
//             description: "One shot of Espresso, a little steamed milk topped with foam",
//             price: 6,
//             foodType: ["Drink", "Coffee"],
//             options: ["Small", "Medium", "Large", "In House", "ToGo"]
//         },
//         {
//             name: "Americano",
//             category: "Drink",
//             description: "Two shots of espresso with hot water",
//             price: 4,
//             foodType: ["Drink", "Coffee"],
//             options: ["Small", "Medium", "Large", "In House", "ToGo"]
//         },
//         {
//             name: "Sweet Tea",
//             category: "Drink",
//             description: "Fresh brewed and sweeter than your Nana",
//             price: 5,
//             foodType: ["Drink"],
//             options: ["Unsweet", "Small", "Medium", "Large", "In House", "ToGo"]
//         }

//     ],
//     // foodTypes: [
//     //     {
//     //         name: "Coffee"
//     //     },
//     //     {
//     //         name: "Sandwich"
//     //     },
//     //     {
//     //         name: "Pastry"
//     //     },
//     //     {
//     //         name: "Beverage"
//     //     },
//     // ],
//     // specificationDrinks: [
//     //     {
//     //         name: "No Sugar",
//     //         price: 0,
//     //     },
//     //     {
//     //         name: "Iced",
//     //         price: 1,
//     //     },
//     //     {
//     //         name: "Half Sugar",
//     //         price: 0,
//     //     },
//     //     {
//     //         name: "Caffeine Free",
//     //         price: 0,
//     //     },
//     // ],
//     // specificationFood: [
//     //     {
//     //         name: "Allergen",
//     //         price: 0,
//     //     },
//     //     {
//     //         name: "Vegetarian",
//     //         price: 0,
//     //     },
//     //     {
//     //         name: "Gluten-Free",
//     //         price: 0,
//     //     },
//     //     {
//     //         name: "Keto",
//     //         price: 0,
//     //     },
//     // ]

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
// const drink = new drinkItem({
//     name: "",
//     description: "",
//     price: ,
// });
// drink.save()
// console.log(drink);

// drink.save()
// console.log(drink);
