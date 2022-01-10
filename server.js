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

app.use(express.json());
app.get("/", async (request, response) => {
  try {
    const statement = "Mic Check 1, 2 what is this?";
    response.json({ statement });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/menu", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    console.log(menuArray);
    response.json({ menuArray });
  } catch (error) {
    response.status(500).send(error);
  }
});


// use try/catch
app.get("/drinks", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const drinkArray = menuArray[0].drinkItems.filter((drinkItem) => {
      // foodItem.foodType;
      console.log(drinkItem.foodType)
      // if (foodItem.foodType.includes("Alcohol")) {
      //   return true;
      // } else {
      //   return false;
      // }
    })
    console.log("Did it work", menuArray[0].drinkItems)
    response.json({ drinkArray: menuArray[0].drinkItems });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/alcohol", async (request, response) => {
  try {
    const menuArray = await Menu.find({});
    const drinkArray = menuArray[0].drinkItems.filter((drinkItem) => {
      console.log(drinkItem.foodType)
      if (foodItem.foodType.includes("Alcohol")) {
        return true;
      } else {
        return false;
      }
    })
    console.log("Did it work", menuArray[0].drinkItems)
    response.json({ drinkArray: menuArray[0].drinkItems });
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/try", async (request, response) => {
  try {
    const menuArray = db.Group-Project-POS.find({
      foodType: {
        $all: ["Dessert"],
      },
    });
    response.json({ menuArray });
    console.log(menuArray);
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

// app.post('/api/admin/getUser', (req, res) => {
//   //console.log(JSON.stringify(req.body.emailAddress))
//   var queryEmailAddress = req.body.emailAddress;
//   // console.log(queryEmailAddress);
//   userModel.findOne({emailAddress: queryEmailAddress}, (error, data) => {
//     if (error) {
//       console.log(error);
//       return res.status(404).send('404 error in finding user');
//     }
//     else if (data){
//       // console.log(data);
//       return res.send(data);
//     }
//     else return res.status(404).send('404 not found');
//   })
// });


app.listen(3000, () => {
  console.log("Serving up delicious data on Server 3000");
});