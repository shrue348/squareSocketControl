const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/canvas', (req, res) => {
  res.sendFile(__dirname + '/canvas.html');
});

app.post('/', function(req, res){
  res.send(req.body);
  io.emit('move', req.body);
});

http.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});
