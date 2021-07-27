const socket = io();

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

socket.on('image', data => {
	const img = new Image();
	img.src = data;
	img.onload = () => {
		ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
	};
});