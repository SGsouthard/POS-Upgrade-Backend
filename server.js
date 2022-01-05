const express = require("express");
const { Menu } = require("./discarded-code");
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

app.listen(3000, () => {
  console.log("Serving up delicious data on Server 3000");
});