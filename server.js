const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.get("/users", (req, res) => {
  const users = require("./models/just_data");
  res.send({ mssg: "Hello", users }).sendStatus(204);
});

app.get("/users-page", (req, res) => {
  res.sendFile("./users.html", { root: "./public" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
