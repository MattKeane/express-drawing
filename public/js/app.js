const source = document.querySelector('#source');
const ctx = source.getContext('2d');
const socket = io();

let [startX, startY] = [null, null];
let drawing = false;

source.addEventListener('mousedown', e => {
	[startX, startY] = [e.offsetX, e.offsetY];
	drawing = true;
});

source.addEventListener('mousemove', e => {
	if (drawing) {
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.lineWidth = 2;
		ctx.stroke();
		[startX, startY] = [e.offsetX, e.offsetY];
	}
});

source.addEventListener('mouseup', e => {
	drawing = false;
});

const destination = document.querySelector('#destination');
const dCtx = destination.getContext('2d');

const button = document.querySelector('button');
button.addEventListener('click', e => {
	const imgData = source.toDataURL('image/png');
	console.log(imgData);
	const img = new Image();
	img.src = imgData;
	img.onload = () => {
		dCtx.drawImage(img, 0, 0, destination.width, destination.height);
	};
})