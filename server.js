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

io.on('connection', socket => {
	socket.on('image', img => {
		console.log(img);
	});
});

server.listen(PORT, () => {
	const d = new Date();
	console.log(`${d.toLocaleString()}: listening on Port ${PORT}.`)
});