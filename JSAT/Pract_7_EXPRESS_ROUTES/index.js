const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { title } = require("process");
const app = express();

app.set("view engine", "hbs");
app.set("Views", path.join(__dirname, "Views"));

app.use(express.static(path.join(__dirname, "Public")));

app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "Here You Will Find About Me",
    discription:
      "Hey! this is Rakesh an App developer and An Rocket Science engineer",
  });
});

app.listen(9000, () => {
  console.log("the Server is Running on 9000 Port");
});
