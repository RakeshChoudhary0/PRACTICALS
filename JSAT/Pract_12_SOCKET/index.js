const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const path = require("path");

// Creating SEerver Instances
const app = express();
const server = http.createServer(app);

// Adding Pubic Directory

app.use(express.static(path.join(__dirname, "Public")));

// This is the SOeket Server uworkign on HTTP server
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("new Client Connected");
  socket.on("chat-message", (msg) => {
    console.log("The Message was received");
    io.emit("chat-message", msg);
  });
});

server.listen(9000, () => {
  console.log("The server is running on Port no. 9000");
});
