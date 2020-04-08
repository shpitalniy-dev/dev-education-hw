function sortMyArr(arr){
    arr.sort((a, b) => a.lastName > b.lastName ? 1 : -1);
}

function mapMyArr(arr){
    return arr.map(obj => upperCase(obj));
}

function filterMyArr(arr){
    return arr.filter(obj => obj.age > 25);
}

function reduceMyArr(arr){
    return arr.reduce((count, obj) => count + obj.lastName.length, 0);
}

function forEachMyArr(arr){
    var str = ""
    arr.forEach(obj => str = str + "<dt>" + obj.firstName + "</dt>");
    return str;
}