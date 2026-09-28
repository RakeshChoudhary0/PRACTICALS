const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "Public")));

// This API if from GOOGLE BABA
// https://jsonplaceholder.typicode.com/todos/1

app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/todo", async (req, res) => {
  console.log("The API CALLED");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todo = await response.json();

    return res.status(200).json({
      success: true,
      message: "Data received Successfully",
      data: todo,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(9000, () => {
  console.log("The server is Running on Port 9000");
});
