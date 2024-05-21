const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors")

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

  // socket.broadcast.emit('message', message);
  // io.broadcast.emit('message', message);
  socket.on("message",(message)=>{
    io.emit("message",message);
  })
 
});

httpServer.listen(3000,()=>{
    console.log("sever connected at 3000")
});