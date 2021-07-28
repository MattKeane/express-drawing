const source = document.querySelector('#source');
const ctx = source.getContext('2d');
const socket = io();

let [startX, startY] = [null, null];
let drawing = false;
let mouseDown = false;

source.addEventListener('mousedown', e => {
	[startX, startY] = [e.offsetX, e.offsetY];
	drawing = true;
	mouseDown = true;
});

source.addEventListener('mousemove', e => {
	if (drawing) {
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.lineWidth = 2;
		ctx.stroke();		
	}
	[startX, startY] = [e.offsetX, e.offsetY];
});

source.addEventListener('mouseleave', e => {
	if (drawing) {
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.lineWidth = 2;
		ctx.stroke();
	}
	drawing = false;
})

source.addEventListener('mouseenter', e => {
	if (mouseDown) {
		[startX, startY] = [e.offsetX, e.offsetY];
		drawing = true;
	}
})

document.addEventListener('mouseup', e => {
	mouseDown = false;
	drawing = false;
});

const button = document.querySelector('button');
button.addEventListener('click', e => {
	const imgData = source.toDataURL('image/png');
	socket.emit('image', imgData);
});