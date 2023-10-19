const io = require("socket.io-client");
//const socket = io('http://localhost:3000')
const socket = io('http://172.22.0.3:3000')
//const socket = io('http://internal-crts-node-2043145710.ap-south-1.elb.amazonaws.com.')

console.log("starting")

socket.on('connect', () => {
  console.log('Connected to the server');
  socket.emit('message', "hello");
});

socket.on('message', (data) => {
  console.log('Received message:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from the server');
});

socket.on('error', (error) => {
  console.error('Socket.IO error:', error);
});
