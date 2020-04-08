import './styles/style.less';

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const position = document.getElementById('position');
const color = document.getElementById('color');
const background = document.getElementById('background');
const size = document.getElementById("size");
const btnClear = document.getElementById('btnClear');
const url = "http://localhost:3000/";
const lineObj = {
	size: undefined,
	color: undefined,
	moveTo: [],
	lineTo: []
};
let isDrawing;

const ws = new WebSocket('ws://localhost:3000/');
// const ws = new WebSocket('wss://blooming-springs-12930.herokuapp.com/');
ws.onopen = () => {
	console.log("ONLINE");
}

ws.onmessage = response => {
	console.log("Give new response from server");
	let canvasSettings = JSON.parse(response.data);
	console.log(canvasSettings);
	layout(canvasSettings);
}

ws.onclose = () => {
	console.log("DISCONNECTED");
}

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

	//   getCoordinateFromServer();
}

function layout(canvasSettings){
	context.clearRect(0, 0, canvas.width, canvas.height);
	if(canvasSettings.background != undefined){
		canvas.style.background = canvasSettings.background;
	}
	for(let i = 0; i < canvasSettings.lines.length; i++){
		context.beginPath();
		context.strokeStyle = canvasSettings.lines[i].color;
		context.lineWidth = canvasSettings.lines[i].size;
		context.moveTo(canvasSettings.lines[i].moveTo[0], canvasSettings.lines[i].moveTo[1]);
		for(let j = 0; j < canvasSettings.lines[i].lineTo.length; j = j + 2){
			context.lineTo(canvasSettings.lines[i].lineTo[j], canvasSettings.lines[i].lineTo[j+1]);
			context.stroke();
		}
	}
}

function getCoordinateFromServer(){
	let xhr = new XMLHttpRequest();
    xhr.open('GET', url + 'read');
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE){
			layout(JSON.parse(xhr.responseText));
        }
    }
    xhr.send();
}

function startDrawing(e) {
	isDrawing = true; 
	context.beginPath();
	context.strokeStyle = color.value;
	context.lineWidth = size.value;
	let x = e.offsetX;
	let y = e.offsetY;
	context.moveTo(x, y);
	lineObj.size = size.value;
	lineObj.color = color.value;
	lineObj.moveTo.push(x, y);
}

function draw(e) {
	if (isDrawing == true)
	{      
        let x = e.offsetX;
		let y = e.offsetY;

		context.lineTo(x, y);
		context.stroke();
		lineObj.lineTo.push(x, y);
	}
}

function stopDrawing() {
	if(isDrawing === true){
		// sentLineObjToServer();
		console.log(lineObj);
		ws.send(JSON.stringify(lineObj));
		lineObj.moveTo.length = 0;
		lineObj.lineTo.length = 0;
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
	// context.clearRect(0, 0, canvas.width, canvas.height);
	// canvas.style.background = "#ffffff";
	ws.send(JSON.stringify({clear: true}));
	// clearCanvasSettings();
}

function sentLineObjToServer(){
	let xhr = new XMLHttpRequest();
    let json = JSON.stringify(lineObj);
    xhr.open('POST', url + 'add-line');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE){
			lineObj.moveTo.length = 0;
			lineObj.lineTo.length = 0;
			console.log(xhr.responseText);
        }
    }
    xhr.send(json);
}

function sendBackgroundToServer(background){
	let obj = {
		back: background,
	}
	let json = JSON.stringify(obj);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', url + 'add-background');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE){
			console.log(xhr.responseText);
        }
    }
    xhr.send(json);
}

function clearCanvasSettings(){
	let xhr = new XMLHttpRequest();
	xhr.open('GET', url + 'clear');
    xhr.onreadystatechange = function(){
        if(xhr.status === 200 && xhr.readyState === XMLHttpRequest.DONE){
			console.log(xhr.responseText);
        }
    }
    xhr.send();
}