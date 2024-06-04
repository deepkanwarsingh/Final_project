const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const httpServer = createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log('Client connected');

  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    socket.to(room).emit('message', `${username} has joined the room`);

   
    socket.emit('message', `Welcome to the room ${room}, ${username}`);


    socket.on("message", (message) => {
      io.to(room).emit("message", message);
    });

    //  user disconnect
    socket.on('disconnect', () => {
      io.to(room).emit('message', `${username} has left the room`);
    });
  });
});

httpServer.listen(3000, () => {
  console.log("Server connected at 3000");
});
