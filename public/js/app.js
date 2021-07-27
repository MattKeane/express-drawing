const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let [startX, startY] = [null, null];
let drawing = false;

canvas.addEventListener('mousedown', e => {
	[startX, startY] = [e.offsetX, e.offsetY];
	drawing = true;
});

canvas.addEventListener('mousemove', e => {
	if (drawing) {
		ctx.beginPath();
		ctx.moveTo(startX, startY);
		ctx.lineTo(e.offsetX, e.offsetY);
		ctx.lineWidth = 2;
		ctx.stroke();
		[startX, startY] = [e.offsetX, e.offsetY];
	}
});

canvas.addEventListener('mouseup', e => {
	drawing = false;
});