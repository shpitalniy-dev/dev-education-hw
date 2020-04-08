// module.exports = {
//     getKeyValue: getKeyValue
// }

function convertObj(obj){
    var newObject = {};
    var checker = 0;
    
    function getKeyValue(obj){
        for(var key in obj){
            if(checker == 3){
                break;
            }
            if(typeof obj[key] == 'object'){
                getKeyValue(obj[key]);
            }else{
                switch(key){
                    case 'first':
                        newObject.firstName = obj[key];
                        checker++;
                        break;
                    case 'last':
                        newObject.lastName = obj[key];
                        checker++;
                        break;
                    case 'age':
                        newObject.age = obj[key];
                        checker++;
                        break;
                }
            }
        }
    }
    getKeyValue(obj);

    return newObject;
}

function copyArray(arr){
    var newArr = [];
    Object.assign(newArr, arr);
    return newArr;
}

function upperCase(obj){
    var newObj = {};
    Object.assign(newObj, obj);
    newObj.firstName = newObj.firstName.toUpperCase();
    return newObj;
}

function putInHTML(element, str){
    element.innerHTML = "";
    var dl = document.createElement('dl');
    dl.innerHTML = str;
    element.append(dl);
}