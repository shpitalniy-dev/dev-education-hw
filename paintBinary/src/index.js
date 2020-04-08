import './styles/style.less';
import BinaryTree from './binaryTree';
 
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawCircle(x, y, r, value){
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.strokeText(value, x, y);
}

BinaryTree.prototype.draw = function(){
    let r = 10;
    let x = canvas.width / 2;
    let y = r;
    this.drawNode(this.root, x, y, r);
}

BinaryTree.prototype.drawNode = function(node, x, y, r){
    if(node === null){
        return;
    }
    drawCircle(x, y, r, node.value);
    y = y + 2 * r;
    if(node.right != null){
        x = x - 2 * r;
        this.drawNode(node.right, x, y, r);
    }
    if(node.left != null){
        x = x + 2 * r;
        this.drawNode(node.left, x, y, r);
    }
    return;
}

let myBinaryTree = new BinaryTree();
myBinaryTree.init([10,7,8,12,15,11]);
console.log(myBinaryTree);
myBinaryTree.draw();
    