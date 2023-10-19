const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const { join } = require('node:path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

io.on('connection', (socket) => {
  console.log('A user connected ' + socket.id);

  socket.on('message', (data) => {
    console.log('Received message:', data);
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

io.on('error', (error) => {
  console.error('Socket error:', error);
});

server.listen(PORT, () => {
  console.log('Server is running on http://localhost:'+PORT);
});
