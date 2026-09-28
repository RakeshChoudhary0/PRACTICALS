const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

const middleWare = (req, res, next) => {
  try {
    const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode}\n`;
    console.log(log);
    fs.appendFileSync("server.log", log, (err) => {
      console.log("Some Thing was Suspicus", err);
    });
  } catch (error) {
    console.log(error);
  }
  next();
};

app.use(middleWare);

app.get("/", (req, res) => {
  console.log("this is The Request to be Handle ");
  return res.status(200).json({
    success: true,
    messsage: "Midle ware Example",
  });
});

app.listen(9000, () => {
  console.log("The Server is Runing on port no. 9000");
});
