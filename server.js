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
    console.log(menuArray);
    response.json({ menuArray });
  } catch (error) {
    response.status(500).send(error);
  }
});

//The drinks section (change the element on menuArray to 0 to see complete menu)
app.get("/drinks", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const drinkArray = menuArray[1].drinkItems.filter((drinkItem) => {
      console.log(drinkItem.foodType)
    })
    console.log("Did it work", menuArray[1].drinkItems)
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
      // foodItem.foodType;
      console.log(foodItem.foodType)
      // if (foodItem.foodType.includes("Alcohol")) {
      //   return true;
      // } else {
      //   return false;
      // }
    })
    console.log("Did it work", menuArray[1].foodItems)
    response.json({ foodArray: menuArray[1].foodItems });
  } catch (error) {
    response.status(500).send(error);
  }
});

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
app.get("/food/sandwiches", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const sandoArray = menuArray[0].foodItems.filter((foodItems) => {
      if (error) {
        console.log("There was an issue")
      } else {
        
      }
      console.log(sandoArray)
    })
    console.log(sandoArray)
    response.json({ sandoArray: menuArray[0].foodItems });
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