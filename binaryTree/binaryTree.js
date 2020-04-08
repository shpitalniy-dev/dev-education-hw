var BinaryTree = function () {
    this.root = null;
}

var Node = function (value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

BinaryTree.prototype.init = function (initialArray) {
    this.clear();
    for (var i = 0; i < initialArray.length; i++) {
        this.add(initialArray[i]);
    }
}

BinaryTree.prototype.clear = function () {
    this.root = null;
}

BinaryTree.prototype.add = function (value) {
    this.root = this.addNode(this.root, value);
}

BinaryTree.prototype.addNode = function (node, value) {
    if (node == null) {
        node = new Node(value);
    } else if (value < node.value) {
        node.left = this.addNode(node.left, value);
    } else if (value > node.value) {
        node.right = this.addNode(node.right, value);
    }
    return node;
}

BinaryTree.prototype.toArray = function () {
    var array = [];
    array = this.nodeToArray(this.root, array);
    return array;
}

BinaryTree.prototype.nodeToArray = function (node, array) {
    if (node == null) {
        return array;
    }
    this.nodeToArray(node.left, array);
    array.push(node.value);
    this.nodeToArray(node.right, array);
    return array;
}

BinaryTree.prototype.find = function (value) {
    return this.findNote(this.root, value);
}

BinaryTree.prototype.findNote = function (node, value) {
    if (node == null) {
        return false;
    }

    if (node.value == value) {
        return node;
    }

    if (value > node.value) {
        return this.findNote(node.right, value);
    } else {
        return this.findNote(node.left, value);
    }
}

BinaryTree.prototype.remove = function (value) {
    var node = this.find(value);
    if (!node) {
        return false;
    }

    if (node.right) {
        var tmpNode = node.left;

        node.value = node.right.value;
        node.left = node.right.left;
        node.right = node.right.right;

        while (node.left) {
            node = node.left;
        }

        node.left = tmpNode;
        return;
    } else if (node.left) {
        node.value = node.left.value;
        node.right = node.left.right;
        node.left = node.left.left;
        return;
    } else {
        //How to delete when node doesnt have children?
        this.removeNodeWithoutChildren(value);
        return;
    }
}

BinaryTree.prototype.removeNodeWithoutChildren = function (value) {
    var tmpNode = this.root;
    var prevNode;

    if (tmpNode.value == value) {
        this.root = null;
        return;
    }

    while (tmpNode.value != value) {
        if (value > tmpNode.value) {
            prevNode = tmpNode;
            tmpNode = tmpNode.right;
        } else {
            prevNode = tmpNode;
            tmpNode = tmpNode.left;
        }
    }

    if (prevNode.right.value == value) {
        prevNode.right = null;
    } else {
        prevNode.left = null;
    }
}

BinaryTree.prototype.getHeight = function () {
    return this.getHeightNode(this.root);
}

BinaryTree.prototype.getHeightNode = function (node) {
    if (node.right == null && node.left == null) {
        return 1;
    }
    if (node.right == null) {
        return 1 + this.getHeightNode(node.left);
    }
    if (node.left == null) {
        return 1 + this.getHeightNode(node.right);
    }
    return 1 + Math.max(this.getHeightNode(node.right), this.getHeightNode(node.left));
}

BinaryTree.prototype.getMaxWidth = function () {
    var heigth = this.getHeight();
    var maxWidth = 0, width = 0;
    for (var i = 1; i <= heigth; i++) {
        width = this.getWidth(this.root, i);
        if (width > maxWidth) {
            maxWidth = width;
        }
    }
    return maxWidth;
}

BinaryTree.prototype.getWidth = function (node, level) {
    if (node == null) return 0;
    if (level == 1) return 1;
    return this.getWidth(node.left, level - 1) + this.getWidth(node.right, level - 1);
}

BinaryTree.prototype.reverse = function () {
    this.reverseNode(this.root);
}

BinaryTree.prototype.reverseNode = function (node) {
    if (node.right == null && node.left == null) {
        return;
    }
    if (node.right && node.left) {
        var tmpNode = node.right;
        node.right = node.left;
        node.left = tmpNode;
        this.reverseNode(node.right);
        this.reverseNode(node.left);
        return;
    }
    if (node.right == null) {
        node.right = node.left;
        node.left = null;
        this.reverseNode(node.right);
        return;
    }
    if (node.left == null) {
        node.left = node.right;
        node.right = null;
        this.reverseNode(node.left);
        return;
    }

}

BinaryTree.prototype.getLeaves = function () {
    return this.getLeavesNode(this.root);
}

BinaryTree.prototype.getLeavesNode = function (node) {
    if (node.left == null && node.right == null) {
        return 1;
    }
    if (node.left == null) {
        return this.getLeavesNode(node.right);
    }
    if (node.right == null) {
        return this.getLeavesNode(node.left);
    }
    return this.getLeavesNode(node.left) + this.getLeavesNode(node.right);
}

BinaryTree.prototype.getLength = function () {
    return this.getLengthNode(this.root);
}

BinaryTree.prototype.getLengthNode = function (node) {
    if (node.right == null && node.left == null) {
        return 1;
    }
    if (node.right == null) {
        return 1 + this.getLengthNode(node.left);
    }
    if (node.left == null) {
        return 1 + this.getLengthNode(node.right);
    }
    return 1 + this.getLengthNode(node.left) + this.getLengthNode(node.right);
}

var myTree = new BinaryTree();
myTree.init([5, 3, 7, 8, 6, 2, 4]);
// console.log(myTree.getLength());

module.exports = {
    myTree
}