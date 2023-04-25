const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello ECS");
});

app.listen(80);
