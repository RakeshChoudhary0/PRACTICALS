const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.set("Views", path.join(__dirname, "Views"));
hbs.registerPartials(path.join(__dirname, "Views", "Partials"));

hbs.registerHelper("addition", (a, b) => {
  return a + b;
});

const Proffesion = [
  {
    _id: "1",
    title: "Building Drones",
    desc: "Automobive Drones , Manual Army Drones etc.",
  },
  {
    _id: "2",
    title: "App Developer",
    desc: "Cross Platfrom App Dveloper IOS/Android",
  },
  {
    _id: "3",
    title: "Web Developer",
    desc: "Responsive and Scaleable Website , NEXTJS and REACTJS",
  },
  {
    _id: "4",
    title: "Rocket Science",
    desc: "Desiging Rockets Engine , Aerodynamic Systems",
  },
];

app.use(express.static(path.join(__dirname, "Public")));


app.get("/", (req, res) => {
  res.render("index.hbs");
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    title: "Here You Will Find About Me",
    discription:
      "Hey! this is Rakesh an App developer and An Rocket Science engineer",
    data: Proffesion,
  });
});



app.get("/:Any", (req, res) => {
  res.render("error.hbs");
});

app.listen(9000, () => {
  console.log("the Server is Running on 9000 Port");
});
