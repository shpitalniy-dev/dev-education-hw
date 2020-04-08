const myArray = function(){}

const LinkedList = function(){
    myArray.call(this);
    this.array = [];
}
LinkedList.prototype = Object.create(myArray.prototype);
LinkedList.prototype.constructor = LinkedList;

myArray.prototype.init = function(initialArray){
    this.array = [];
    for(let i = 0; i < initialArray.length; i++){
        this.push(initialArray[i]);
    }
}

myArray.prototype.push = function(val){
    let len = this.getSize();
    let obj = {};
    obj.value = val;
    if(len == 0){
        obj.prev = null;
    }else{
        obj.prev = this.array[len-1];
        this.array[len-1].next = obj;
    }
    obj.next = null;
    this.array[len] = obj;
    return this.getSize();
}

myArray.prototype.pop = function(){
    let lastElement = this.array[this.getSize() - 1];
    this.array = this.slice(0, this.getSize() - 1);
    this.array[this.getSize() - 1].next = null;
    return lastElement;
}

myArray.prototype.shift = function(){
    var firstElement = this.array[0];
    this.array = this.slice(1);
    return firstElement;
}

myArray.prototype.unshift = function(val){
    var newArray = [{
        value: val,
        prev: null,
        next: this.array[0]
    }];
    var j = 1;
    for(var i = 0; i < this.getSize(); i++){
        newArray[j] = this.array[i];
        j++;
    }
    newArray[1].prev = newArray[0];
    this.array = newArray;
    return this.getSize();
}

myArray.prototype.slice = function(start = 0, end = this.getSize()){
    var newArray = [];
    var j = 0;
    for(var i = start; i < end; i++){
        newArray[j] = this.array[i];
        j++;
    }
    newArray[0].prev = null;
    newArray[j - 1].next = null;
    return newArray;
}

myArray.prototype.splice = function(index, deleteCount = 1, ...addElements){    
    var deleteElementsArray = [];
    var k = 0;

    var newArray = this.array;
    var lenArray = this.getSize();
    this.init(addElements);

    for(var i = 0; i < lenArray; i++){
        if(i < index){
            this.unshift(newArray[i].value);
        }else if(i >= index + deleteCount){
            this.push(newArray[i].value);
        }else{
            deleteElementsArray[k] = newArray[i].value;
            k++;
        }
    }

    return deleteElementsArray;
}

myArray.prototype.getSize = function(){
    let i = 0;
    while(typeof this.array[i] != 'undefined'){
        i++;
    }
    return i;
}

myArray.prototype.toString = function(){
    var resultString = "";
    var arrayLength = this.getSize();
    for(var i = 0; i < arrayLength - 1; i++){
        resultString += JSON.stringify(this.array[i].value) + ",";
    }
    resultString += JSON.stringify(this.array[arrayLength - 1].value);
    return resultString;
}

myArray.prototype.toArray = function(){
    let len = this.getSize();
    let arr = [];
    for(let i = 0; i < len; i++){
        arr[i] = this.array[i].value;
    }
    return arr;
}

myArray.prototype.sort = function(comparator){
    var arrayLength = this.getSize();
    let arrForSort = this.toArray();
    for(var i = 0; i < arrayLength; i++){
        for(var j = 0; j < arrayLength - i - 1; j++){
            if(comparator(arrForSort[j], arrForSort[j+1])){
                var tmp = arrForSort[j];
                arrForSort[j] = arrForSort[j+1];
                arrForSort[j+1] = tmp;
            }
        }
    }
    this.init(arrForSort);
    return this.array;
}

myArray.prototype.get = function(index){
    return this.array[index].value;
}

myArray.prototype.set = function(index, value){
    let arr = this.toArray();
    arr[index] = value;
    this.init(arr);
}

let myLinkedList = new LinkedList();

// myLinkedList.init([1,2,3]);
// console.log(myLinkedList.array);
// myLinkedList.sort((a,b) => a > b ? false : true);
// myLinkedList.set(3, 0);
// console.log(myLinkedList.array);

module.exports = {
    myLinkedList
}