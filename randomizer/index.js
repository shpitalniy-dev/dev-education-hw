try{
    var out = document.getElementById('out');
    var btn_gen = document.getElementById('btn_gen');
    var btn_res = document.getElementById('btn_res');
} catch { 
    var out = {};
    var btn_gen = {
        addEventListener: () => true,
    };
    var btn_res = {
        addEventListener: () => true,
    };
}

var arr = [];

function checkNumber() {
    for (var i = 0; i < arguments.length; i++) {
        if (!isFinite(arguments[i])) {
            return false;
        }
    }
    return true;
}

function getRandomNumber(min, max, arr) {
    if (!checkNumber(min, max) || (min == 0 && max == 0) || min < 0 || max < 0) return false;

    if ((max - min + 1) > arr.length) {
        var rand = Math.floor(min + Math.random() * (max + 1 - min));
        if (!checkInArray(rand, arr)) {
            arr.push(rand);
            return rand;
        } else {
            return getRandomNumber(min, max, arr);
        }
    } else {
        btn_gen.disabled = true;
        return false;
    }
}

function checkInArray(a, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == a) {
            return true;
        }
    }
    return false;
}

function generate() {
    var min = +document.getElementById('min').value;
    var max = +document.getElementById('max').value;

    var result = getRandomNumber(min, max, arr);
    out.value = result ? result : "Elements are over";
}

function reset() {
    arr.length = 0;
    out.value = "";
    btn_gen.disabled = false;
}

btn_gen.addEventListener("click", generate);
btn_res.addEventListener("click", reset);

module.exports = {
    getRandomNumber,
}