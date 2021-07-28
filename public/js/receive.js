const socket = io();

socket.emit('join', room);

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// socket.on('image', data => {
// 	const img = new Image();
// 	img.src = data;
// 	img.onload = () => {
// 		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
// 	};
// });

socket.on('roomImage', imgData => {
	const img = new Image();
	img.src = imgData;
	img.onload = () => {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	};
})