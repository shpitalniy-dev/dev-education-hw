const convertValueObj = {
    "Versts": {
        "Versts": 1,
        "Meters": 1066.8,
        "Yards": 1166.67,
        "Foots": 3500,
    },
    "Meters": {
        "Versts": 0.0009,
        "Meters": 1,
        "Yards": 1.0936,
        "Foots": 3.2808,
    },
    "Yards":{
        "Versts": 0.00086,
        "Meters": 0.9144,
        "Yards": 1,
        "Foots": 3,        
    },
    "Foots": {
        "Versts": 0.00029,
        "Meters": 0.3048,
        "Yards": 0.3333,
        "Foots": 1,  
    }
}
const currentLanguage = "English";
const buttonConvert = document.getElementById('buttonConvert');
const convertValue = document.getElementById('convertValue');
const convertFrom = document.getElementById('convertFrom');
const convertTo = document.getElementById('convertTo');
const resultValue = document.getElementById('resultValue');
const buttonSettings = document.getElementById('buttonSettings');
const modalWindow = document.getElementById('modalWindow');
const buttonApply = document.getElementById('buttonApply');
const languageSelect = document.getElementById('language');
const convertFromVersts = document.getElementById('convertFromVersts');
const convertFromMeters = document.getElementById('convertFromMeters');
const convertFromYards = document.getElementById('convertFromYards');
const convertFromFoots = document.getElementById('convertFromFoots');
const convertToVersts = document.getElementById('convertToVersts');
const convertToMeters = document.getElementById('convertToMeters');
const convertToYards = document.getElementById('convertToYards');
const convertToFoots = document.getElementById('convertToFoots');
const wrapperElement = document.querySelector('.wrapper');
const languageObj = {
    English:{
        [convertFromVersts.id]: 'Versts',
        [convertFromMeters.id]: 'Meters',
        [convertFromYards.id]: 'Yards',
        [convertFromFoots.id]: 'Foots',
        [convertToVersts.id]: 'Versts',
        [convertToMeters.id]: 'Meters',
        [convertToYards.id]: 'Yards',
        [convertToFoots.id]: 'Foots',
        [buttonConvert.id]: 'Convert',
        [buttonApply.id]: 'Apply',
    },
    Russian:{
        [convertFromVersts.id]: 'Версты',
        [convertFromMeters.id]: 'Метры',
        [convertFromYards.id]: 'Ярды',
        [convertFromFoots.id]: 'Футы',
        [convertToVersts.id]: 'Версты',
        [convertToMeters.id]: 'Метры',
        [convertToYards.id]: 'Ярды',
        [convertToFoots.id]: 'Футы',
        [buttonConvert.id]: 'Конвертировать',
        [buttonApply.id]: 'Применить',        
    },
    Arabian:{
        [convertFromVersts.id]: 'معالم',
        [convertFromMeters.id]: 'متر',
        [convertFromYards.id]: 'ياردة',
        [convertFromFoots.id]: 'قدم',
        [convertToVersts.id]: 'معالم',
        [convertToMeters.id]: 'متر',
        [convertToYards.id]: 'ياردة',
        [convertToFoots.id]: 'قدم',  
        [buttonConvert.id]: 'تحويل',
        [buttonApply.id]: 'للتقديم' 
    },
}
const elementsObj = {
    [convertFromFoots.id]: convertFromFoots,
    [convertFromMeters.id]: convertFromMeters,
    [convertFromVersts.id]: convertFromVersts,
    [convertFromYards.id]: convertFromYards,
    [convertToFoots.id]: convertToFoots,
    [convertToMeters.id]: convertToMeters,
    [convertToVersts.id]: convertToVersts,
    [convertToYards.id]: convertToYards,
    [buttonConvert.id]: buttonConvert,
    [buttonApply.id]: buttonApply,
}

module.exports = {
    convertValueObj,
    buttonConvert,
    convertValue,
    convertFrom,
    convertTo,
    resultValue,
    buttonSettings,
    modalWindow,
    buttonApply,
    languageSelect,
    elementsObj,
    languageObj,
    currentLanguage,
    wrapperElement
}