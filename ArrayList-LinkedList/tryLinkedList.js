const myArray = function() {};

const LinkedList = function(){
    this._route = null;
    myArray.call(this);
}
LinkedList.prototype = Object.assign(myArray.prototype);
LinkedList.prototype.constructor = LinkedList;

const Node = function(val){
    this.value = val;
    this.next = null;
}

myArray.prototype.init = function(initialArray){
    this._route = null;
    for(let i = initialArray.length - 1; i >=0; i--){
        this.unshift(initialArray[i]);
    }
}

myArray.prototype.unshift = function(value){
    let size = this.getSize();

    const node = new Node(value);
    node.next = this._route;
    this._route = node;

    return size + 1;
}

myArray.prototype.shift = function(){
    let firstElement = this._route;
    this._route = firstElement.next;
    return firstElement.value;
}

myArray.prototype.push = function(value){
    let size = this.getSize();
    const node = new Node(value);
    
    let tempNode = this._route;
    if(!tempNode){
        this._route = node;
        return size + 1;
    }

    while(tempNode.next){
        tempNode = tempNode.next;
    }
    tempNode.next = node;

    return size + 1;
}

myArray.prototype.pop = function(){
    let preLastNode = this._route;
    let lastNode = preLastNode.next;
    while(lastNode.next){
        preLastNode = preLastNode.next;
        lastNode = lastNode.next;
    }
    preLastNode.next = null;
    return lastNode.value;
}

myArray.prototype.getSize = function(){
    let tempNode = this._route;
    let size = 0;

    while(tempNode != null){
        tempNode = tempNode.next;
        size++;
    }

    return size;
}

myArray.prototype.slice = function(start = 0, end = this.getSize()){
    let newLinkedList = this.clone();
    newLinkedList.get(end - 1).next = null;
    newLinkedList._route = newLinkedList.get(start);
    return newLinkedList;
}

myArray.prototype.clone = function(){
    let newLinkedList = new LinkedList();
    newLinkedList._route = Object.assign({}, this._route)
    let tempThisNode = this._route;
    let tempNewNode = newLinkedList._route; 
    while(tempThisNode.next){
        tempNewNode.next = Object.assign({}, tempThisNode.next);
        tempNewNode = tempNewNode.next;
        tempThisNode = tempThisNode.next;
    }
    return newLinkedList;
}

myArray.prototype.splice = function(index, deleteCount = 1, ...addElements){  
    let newLinkList = this.clone();
    let deleteLinkList = new LinkedList();
    let len = this.getSize();
    this.init(addElements);
    for(var i = 0; i < len; i++){
        if(i < index){
            this.unshift(newLinkList.get(i).value);
        }else if(i >= index + deleteCount){
            this.push(newLinkList.get(i).value);
        }else{
            deleteLinkList.push(newLinkList.get(i).value)
        }
    }

    return deleteLinkList;
}

myArray.prototype.get = function(index){
    let element = 0;
    let tempNode = this._route;
    while(tempNode){
        if(element == index){
            return tempNode;
        }
        element++;
        tempNode = tempNode.next;
    }
    return tempNode;
}

myArray.prototype.sort = function(comparator){
    let len = this.getSize();
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len - i - 1; j++){
            let firstElement = this.get(j);
            let secondElement = this.get(j+1);
            if(comparator(firstElement.value, secondElement.value)){
                this.splice(j,2,secondElement.value,firstElement.value);
                // It is the low productivity variant but it works
            }
        }
    }
    return this;
}

myArray.prototype.set = function(index, val){
    let node = this.get(index);
    node.value = val;
}

myArray.prototype.toString = function(){
    let tempNode = this._route;
    let str = "";
    while(tempNode){
        str += tempNode.value + ",";
        tempNode = tempNode.next;
    }
    return str.slice(0, -1);
}

let myLinkedList = new LinkedList();
// myLinkedList.init([1,2,3]);
// console.log(myLinkedList.toString());

module.exports = {
    myLinkedList,
};