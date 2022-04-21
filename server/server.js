const express = require("express");
const http = require("http");
const app = express();
const servidor = http.createServer(app);

const socketio = require("socket.io");
const io = socketio(servidor, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const port = 8080;

servidor.listen(port, () => {
  console.log(`servidor inicializado, escuchando en el puerto: ${port}`);
});

module.exports = io;
