const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home.ejs');
});

app.get('/receive', (req, res) => {
	res.render('receive.ejs');
});

io.on('connection', socket => {
	socket.on('image', data => {
		io.emit('image', data);
	});
});

server.listen(PORT, () => {
	const d = new Date();
	console.log(`${d.toLocaleString()}: listening on Port ${PORT}.`)
});