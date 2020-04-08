var myArray = function() {};

var ArrayList = function() {
    myArray.apply(this, arguments);
    this.array = [];
};
ArrayList.prototype = Object.create(myArray.prototype);
ArrayList.prototype.constructor = ArrayList;

myArray.prototype.init = function(initialArray){
    this.array = [];
    for(var i = 0; i < initialArray.length; i++){
        this.push(initialArray[i]);
    }
}

myArray.prototype.getSize = function(){
    var i = 0;
    while(typeof this.array[i] != "undefined"){
        i++;
    }
    return i;
}

myArray.prototype.push = function(value){
    this.array[this.getSize()] = value;
    return this.getSize();
}

myArray.prototype.pop = function(){
    var lastElement = this.array[this.getSize() - 1];
    this.array = this.slice(0, this.getSize() - 1);
    return lastElement;
}

myArray.prototype.shift = function(){
    var firstElement = this.array[0];
    this.array = this.slice(1);
    return firstElement;
}

myArray.prototype.unshift = function(value){
    var newArray = [value];
    var j = 1;
    for(var i = 0; i < this.getSize(); i++){
        newArray[j] = this.array[i];
        j++;
    }
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
    return newArray;
}

myArray.prototype.splice = function(index, deleteCount = 1, ...addElements){  
    var deleteElementsArray = [];
    var k = 0;

    var newArray = this.array;
    var lenArray = this.getSize();
    this.array = addElements;

    for(var i = 0; i < lenArray; i++){
        if(i < index){
            this.unshift(newArray[i]);
        }else if(i >= index + deleteCount){
            this.push(newArray[i]);
        }else{
            deleteElementsArray[k] = newArray[i];
            k++;
        }
    }

    return deleteElementsArray;
}

myArray.prototype.sort = function(comparator){
    var arrayLength = this.getSize();
    for(var i = 0; i < arrayLength; i++){
        for(var j = 0; j < arrayLength - i - 1; j++){
            if(comparator(this.array[j], this.array[j+1])){
                var tmp = this.array[j];
                this.array[j] = this.array[j+1];
                this.array[j+1] = tmp;
            }
        }
    }
    return this.array;
}

myArray.prototype.get = function(index){
    return this.array[index];
}

myArray.prototype.set = function(index, value){
    this.array[index] = value;
}

myArray.prototype.toString = function(){
    var resultString = "";
    var arrayLength = this.getSize();
    for(var i = 0; i < arrayLength - 1; i++){
        resultString += JSON.stringify(this.array[i]) + ",";
    }
    resultString += JSON.stringify(this.array[arrayLength - 1]);
    return resultString;
}

var myArrayList = new ArrayList();

module.exports = {
    myArrayList
}