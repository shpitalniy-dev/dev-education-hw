import './styles/style.less';

var operation;
var result = 0;

var input = document.getElementById("input");
var btnPoint = document.getElementById("point");
var btnClear = document.getElementById("clear");
var btnPlus = document.getElementById("plus");
var btnEqual = document.getElementById("equal");
var btnMinus = document.getElementById("minus");
var btnMult = document.getElementById("mult");
var btnDiv = document.getElementById("div");
var btnReset = document.getElementById("reset");


window.onload = function () {
    numberButtonInitialization(input);
    btnPoint.addEventListener("click", () => insertPoint(input));
    btnClear.addEventListener("click", () => clearInput(input));
    btnPlus.addEventListener("click", () => defineOperation(input, btnPlus));
    btnMinus.addEventListener("click", () => defineOperation(input, btnMinus));
    btnMult.addEventListener("click", () => defineOperation(input, btnMult));
    btnDiv.addEventListener("click", () => defineOperation(input, btnDiv));
    btnEqual.addEventListener("click", () => equal(input));
    btnReset.addEventListener("click", () => reset(input));
}

function numberButtonInitialization(input) {
    for (var i = 0; i < 10; i++) {
        (function () {
            var btn = document.getElementById(`${i}`);
            btn.addEventListener("click", () => insertNumber(input, btn.value));
        })();
    }
}

function insertPoint(input) {
    if (input.value.length == 0) {
        input.value = "0.";
    } else {
        input.value += ".";
    }
}

function insertNumber(input, number) {
    if (input.value.includes(".")) {
        input.value += number;
    } else {
        input.value = input.value * 10 + +number;
    }
}

function clearInput(input) {
    input.value = "";
}

function defineOperation(input, btn) {
    if (input.value != "") {
        equal(input);
        operation = btn.value;
        result = +input.value;
        input.value = "";
    } else {
        operation = btn.value;
    }
}

function equal(input) {
    switch (operation) {
        case "+":
            input.value = result + +input.value;
            break;
        case "-":
            input.value = result - +input.value;
            break;
        case "*":
            input.value = result * +input.value;
            break;
        case "/":
            if (+input.value != 0) {
                input.value = result / +input.value;
            } else {
                input.value = 0;
            }
            break;
        default: input.value = +input.value;
    }
    result = 0;
    operation = "";
}

function reset(input) {
    clearInput(input);
    result = 0;
    operation = "";
}
