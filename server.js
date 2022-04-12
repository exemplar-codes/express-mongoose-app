const express = require("express");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile("./index.html");
});

app.get("/users", (req, res) => {
  res.send({ mssg: "Users" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
