const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
	res.render('home.ejs');
});

app.listen(PORT, err => {
	const d = new Date();
	console.log(`${d.toLocaleString()}: listening on Port ${PORT}.`)
});