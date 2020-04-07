const variables = require('./variables');

function getConvertedValue(convertValue, convertFrom, convertTo){
    return convertValue * variables.convertValueObj[convertFrom][convertTo];
}

function setConvertedValueInOutput(output, val){
    output.value = val;
}

function showModalWindow(elem){
    elem.classList.toggle('show-modal-window', true);
}

function closeModalWindow(elem){
    elem.classList.toggle('show-modal-window', false);
}

function setValueInSessionStorage(key, item){
    sessionStorage.setItem(key, item);
}

function checkValueInSessionStorage(key){
    if(sessionStorage.hasOwnProperty(key)){
        return true;
    };
    return false;
}

function getValueFromSessionStorage(elem){
    if(checkValueInSessionStorage(elem.id)){
        elem.value = sessionStorage.getItem(elem.id);
    }
    return false;
}

function defineLanguage(elem){
    var lang = "English";
    if(sessionStorage.hasOwnProperty(elem.id)){
        lang = sessionStorage.getItem(elem.id);
    }
    return lang;
}

module.exports = {
    getConvertedValue,
    setConvertedValueInOutput,
    showModalWindow,
    closeModalWindow,
    setValueInSessionStorage,
    checkValueInSessionStorage,
    getValueFromSessionStorage,
    defineLanguage
}