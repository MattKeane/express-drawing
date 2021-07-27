const express = require('express');

require('dotenv').config();
const PORT = process.env.PORT;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('home.ejs');
});

app.listen(PORT, () => {
	const d = new Date();
	console.log(`${d.toLocaleString()}: listening on Port ${PORT}.`)
});