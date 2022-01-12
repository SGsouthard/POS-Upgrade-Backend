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
app.get("/drinks/coffees", async (request, response) => {
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
app.get("/drinks/sodas", async (request, response) => {
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
app.get("/foods/lunches", async (request, response) => {
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
app.get("/foods/dinners", async (request, response) => {
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
app.get("/foods/desserts", async (request, response) => {
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

//The pastry section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/pastries", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Pastry")
    })
    console.log("Pastries Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The vegetarian section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/vegetarian", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Vegetarian")
    })
    console.log("Veggies Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The soup section (change the element on menuArray to 0 to see complete menu)
app.get("/foods/soups", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const foodsArray = menuArray[1].foodItems.filter((food) => { 
      return food.foodType.includes("Soup")
    })
    console.log("Soups Loaded")
    response.json({ foodsArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.listen(3000, () => {
  console.log("Serving up delicious data on Server 3000");
});