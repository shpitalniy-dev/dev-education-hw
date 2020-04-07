import '../style/style.less';
const variables = require('./variables');
const helpers = require('./helpers');

window.onload = function(){
    helpers.getValueFromSessionStorage(variables.convertValue);
    helpers.getValueFromSessionStorage(variables.convertFrom);
    helpers.getValueFromSessionStorage(variables.convertTo);
    helpers.getValueFromSessionStorage(variables.resultValue);
    helpers.getValueFromSessionStorage(variables.languageSelect);
    renderPage();
}

variables.buttonConvert.addEventListener("click", () => {
    runConvert(variables.convertValue, variables.convertFrom, variables.convertTo, variables.resultValue);
});
variables.buttonSettings.addEventListener("click", () => {
    helpers.showModalWindow(variables.modalWindow);
});
variables.buttonApply.addEventListener("click", () => {
    helpers.setValueInSessionStorage(variables.languageSelect.id, variables.languageSelect.value);
    helpers.closeModalWindow(variables.modalWindow);
    renderPage();
});
variables.convertValue.addEventListener("keyup", () => {
    helpers.setValueInSessionStorage(variables.convertValue.id, variables.convertValue.value);
})
variables.convertFrom.addEventListener("change", () => {
    helpers.setValueInSessionStorage(variables.convertFrom.id, variables.convertFrom.value);
})
variables.convertTo.addEventListener("change", () => {
    helpers.setValueInSessionStorage(variables.convertTo.id, variables.convertTo.value);
})

function runConvert(inputValue, inputFrom, inputTo, output){
    let value = +inputValue.value;
    let from = inputFrom.value;
    let to = inputTo.value;

    let result = helpers.getConvertedValue(value, from, to);
    
    helpers.setConvertedValueInOutput(output, result);
    helpers.setValueInSessionStorage(output.id, output.value);
}

function renderPage(){
    var lang = helpers.defineLanguage(variables.languageSelect);
    if(lang != variables.currentLanguage){
        for(var key in variables.elementsObj){
            variables.elementsObj[key].innerHTML = variables.languageObj[lang][key]; 
        }
        if(lang == 'Arabian'){
            variables.wrapperElement.classList.toggle('arabian-direction', true);
        }else{
            variables.wrapperElement.classList.toggle('arabian-direction', false);  
        }
        variables.currentLanguage = lang;
    }
}