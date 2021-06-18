const express = require("express");
var scholarly = require("scholarly");
const app = express();

app.get("/", async function (req, res) {
  res.json({
    message:
      "Ke /<pencarian anda> untuk query hasil pencarian dalam bentuk json",
  });
});

app.get("/:search", async function (req, res) {
  scholarly.search(req.params.search).then((data) => {
    console.log(data);
    res.json(data);
  });
});

app.listen(5001);
