const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const { join } = require("node:path");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log("A user is connected");

  socket.on("join room", (room) => {
    socket.join(room);
  });
  socket.on("chat message", (msg, room) => {
    io.to(room).emit("chat message", msg);
  });
  socket.on("disconnect", () => {
    console.log("A user is disconnected");
  });
});

server.listen(3000, () => console.log(`App listening on 3000!`));
