const express = require("express");
const { Menu } = require("./models");
const mongoose = require('mongoose');
const app = express();


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//main page
app.use(express.json());
app.get("/", async (request, response) => {
  try {
    const statement = "Welcome to the Group-POS Database! Current routes are as follows: /menu leads to a Complete Menu, /drinks leads to all drink items, /foods leads to all food items";
    response.json({ statement });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The entire menu
app.get("/menu", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    console.log("Menu Loaded");
    response.json({ menuArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The drinks section (change the element on menuArray to 0 to see complete menu)
app.get("/drinks", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const drinkArray = menuArray[1].drinkItems.filter((drinkItem) => {})
    console.log("Drinks Loaded")
    response.json({ drinkArray: menuArray[1].drinkItems });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The foods section (change the element on menuArray to 0 to see complete menu)
app.get("/foods", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodArray = menuArray[1].foodItems.filter((foodItem) => {
    })
    console.log("Foods Loaded")
    response.json({ foodArray: menuArray[1].foodItems });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The coffee section (change the element on menuArray to 0 to see complete menu)
app.get("/drinks/coffee", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const drinksArray = menuArray[1].drinkItems.filter((drink) => { 
      return drink.foodType.includes("Coffee")
    })
    console.log(drinksArray)
    response.json({ drinksArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The soda section (change the element on menuArray to 0 to see complete menu)
app.get("/drinks/soda", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const drinksArray = menuArray[1].drinkItems.filter((drink) => { 
      return drink.foodType.includes("Soda")
    })
    console.log(drinksArray)
    response.json({ drinksArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The sandwiches section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/sandwiches", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Sandwich")
    })
    console.log("Sandwiches Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The breakfast section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/breakfast", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Breakfast")
    })
    console.log("Breakfast Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The lunch section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/lunch", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Lunch")
    })
    console.log("Lunches Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The dinner section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/dinner", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Dinner")
    })
    console.log("Dinners Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The dessert section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/dessert", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Dessert")
    })
    console.log("Desserts Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The food-types section
app.get("/food-types", async (request, response) => {
  try {
    const statement = "Food Types will go here"
    response.json({ statement });
  } catch (error) {
    response.status(500).send(error);
  }

});

//using else/if
// app.get("/drinks", async (request, response) => {
  // Menu.findOne({foodType: "Drink"}, (error, data) => {
//     if (error) {
//       console.log("Issue collecting Drinks", error);
//     }
//     else if (data){
//       console.log(data);
//     }
//   })
// });


app.listen(3000, () => {
  console.log("Serving up delicious data on Server 3000");
});