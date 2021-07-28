const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/send/:room', (req, res) => {
	res.render('send.ejs', req.params);
});

app.get('/receive/:room', (req, res) => {
	res.render('receive.ejs', req.params);
});

io.on('connection', socket => {
	socket.on('image', data => {
		io.emit('image', data);
	});
	socket.on('join', room => {
		socket.join(room);
	});
	socket.on('roomImage', (imgData, room) => {
		io.to(room).emit('roomImage', imgData);
	})
});

server.listen(PORT, () => {
	const d = new Date();
	console.log(`${d.toLocaleString()}: listening on Port ${PORT}.`)
});