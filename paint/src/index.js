import './styles/style.less';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const position = document.getElementById('position');
const color = document.getElementById('color');
const background = document.getElementById('background');
const size = document.getElementById("size");
const btnClear = document.getElementById('btnClear');
let isDrawing;

window.onload = function() {       
      canvas.onmousedown = startDrawing;
      canvas.onmouseup = stopDrawing;
	  canvas.addEventListener("mouseout", () => {
		  stopDrawing();
		  clearPosition();
	  });
      canvas.addEventListener("mousemove", e => {
		  draw(e);
		  definePosition(e);
	  });
	  background.onchange = setBackground;
	  btnClear.onclick = clearCanvas;
}

function startDrawing(e) {
	isDrawing = true; 
	context.beginPath();
	context.strokeStyle = color.value;
	context.lineWidth = size.value;
	let x = e.offsetX;
	let y = e.offsetY;
	context.moveTo(x, y);
}

function draw(e) {
	if (isDrawing == true){      
        let x = e.offsetX;
		let y = e.offsetY;

		context.lineTo(x, y);
		context.stroke();
	}
}

function stopDrawing() {
	if(isDrawing === true){
		isDrawing = false;	
	}
};

function definePosition(e){
	let x = e.offsetX;
	let y = e.offsetY;
	position.innerHTML = x + " : " + y;
}

function clearPosition(){
	position.innerHTML = "";
}

function setBackground(){
	canvas.style.background = background.value;
	// console.log(background.value);
	// sendBackgroundToServer(background.value);
}

function clearCanvas() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	canvas.style.background = "#ffffff";
}