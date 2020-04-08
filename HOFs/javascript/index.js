// const myModule = require('./helpers');
// var getKeyValue = myModule.getKeyValue;

const url = 'https://randomuser.me/api/?results=10';
var users = [];
//var promise = fetch("https://randomuser.me/api/?results=10").then(response => response.json()).then(data => data);
var promise = fetch(url)
.then(function(response){
    return response.text();
})
.then(function (text){
    users = JSON.parse(text).results;
    var newUsers = [];
    var checkUsers = [];
    for(var i = 0; i < users.length; i++){
        newUsers[i] = convertObj(users[i]);
        checkUsers[i] = newUsers[i];
    }
    console.log(users);
    console.log(checkUsers);

    sortMyArr(newUsers);
    console.log(newUsers);

    var mapArr = mapMyArr(newUsers);
    console.log(mapArr);

    var filterArr = filterMyArr(mapArr);
    console.log(filterArr);

    var countLetters = reduceMyArr(newUsers);
    console.log(countLetters);

    var str = forEachMyArr(newUsers);
    console.log(str);
    putInHTML(document.getElementById('root'), str);
});