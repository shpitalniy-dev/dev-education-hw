import './styles/style.less';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const settings = document.getElementById('settings');
const minR = 10, maxR = 50;
const minX = maxR, maxX = canvas.width - maxR;
const minY = maxR, maxY = canvas.height - maxR;
const minVector = -3, maxVector = 3;

window.onload = function () {
    let controller = new Controller();
    canvas.onclick = () => controller.createCircle();
    settings.onclick = () => controller.stopMoving();
}


function getIntRandNum(min, max) {
    let res = Math.round(min - 0.5 + Math.random() * (max - min + 1))
    return res === 0 ? getIntRandNum(min, max) : res;
}

function getRandCol() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function Circle() {
    this.x = getIntRandNum(minX, maxX);
    this.y = getIntRandNum(minY, maxY);
    this.r = getIntRandNum(minR, maxR);
    this.color = getRandCol();
    this.vectorX = getIntRandNum(minVector, maxVector);
    this.vectorY = getIntRandNum(minVector, maxVector);
}

Circle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
}

Circle.prototype.changePosition = function () {
    if (this.x + this.r + this.vectorX > canvas.width) {
        this.vectorX = (-1) * this.vectorX;
    } else if (this.x - this.r + this.vectorX < 0) {
        this.vectorX = (-1) * this.vectorX;
    }
    if (this.y + this.r + this.vectorY > canvas.height) {
        this.vectorY = (-1) * this.vectorY;
    } else if (this.y - this.r + this.vectorY < 0) {
        this.vectorY = (-1) * this.vectorY;
    }
    this.x = this.x + this.vectorX;
    this.y = this.y + this.vectorY;
    // this.draw();
}

// Circle.prototype.move = function() {
//     setInterval(() => this.changePosition(), 5);
// }

function Controller() {
    this.timer = null;
    this.circlesArmy = [];
}

Controller.prototype.createCircle = function () {
    let circle = new Circle();
    this.circlesArmy.push(circle);
    circle.draw();
    this.moving();
}

Controller.prototype.changePosition = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < this.circlesArmy.length; i++) {
        this.circlesArmy[i].changePosition();
        // this.checkCollision(this.circlesArmy[i], i);
        this.circlesArmy[i].draw();
    }
}

// Controller.prototype.checkCollision = function (firstCircle, i) {
//     for (let j = i + 1; j < this.circlesArmy.length; j++) {
//         let secondCircle = this.circlesArmy[j];
//         if (Math.abs(firstCircle.x - secondCircle.x) <= firstCircle.r + secondCircle.r &&
//             Math.abs(firstCircle.y - secondCircle.y) <= firstCircle.r + secondCircle.r) {
//                 if(firstCircle.vectorX > 0 && firstCircle.vectorY > 0 && //first
//                     secondCircle.vectorX > 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorX *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY > 0 &&
//                     secondCircle.vectorX > 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY < 0 &&
//                     secondCircle.vectorX > 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorX *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX > 0 && firstCircle.vectorY < 0 &&
//                     secondCircle.vectorX > 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX > 0 && firstCircle.vectorY < 0 && //second
//                     secondCircle.vectorX > 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorY *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY < 0 && 
//                     secondCircle.vectorX > 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY > 0 && 
//                     secondCircle.vectorX > 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorX *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX > 0 && firstCircle.vectorY > 0 &&
//                     secondCircle.vectorX > 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX > 0 && firstCircle.vectorY > 0 && //third
//                     secondCircle.vectorX < 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorX *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX > 0 && firstCircle.vectorY < 0 &&
//                     secondCircle.vectorX < 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY < 0 &&
//                     secondCircle.vectorX < 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorY *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY > 0 &&
//                     secondCircle.vectorX < 0 && secondCircle.vectorY > 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX > 0 && firstCircle.vectorY < 0 && //fourth
//                     secondCircle.vectorX < 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorX *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY > 0 &&
//                     secondCircle.vectorX < 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorY *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX > 0 && firstCircle.vectorY > 0 &&
//                     secondCircle.vectorX < 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         secondCircle.vectorX *= (-1);
//                         secondCircle.vectorY *= (-1);
//                         break;
//                 }else if(firstCircle.vectorX < 0 && firstCircle.vectorY < 0 &&
//                     secondCircle.vectorX < 0 && secondCircle.vectorY < 0){
//                         firstCircle.vectorX *= (-1);
//                         firstCircle.vectorY *= (-1);
//                         break;
//                 }
//         }
//     }
// }

Controller.prototype.moving = function () {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
        this.changePosition();
    }, 10);
}

Controller.prototype.stopMoving = function () {
    clearInterval(this.timer);
}

