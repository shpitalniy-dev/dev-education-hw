var func = require('./index');
var assert = require('assert');

function generateRandomArray(min, max) {
    var arr = [];

    do {
        var a = func.getRandomNumber(min, max, arr);
    } while (a);

    return arr;
}

describe("getRandomNumber", function () {
    var minArray = [1, 2, 3];
    var maxArray = [3, 4, 5];
    var resultArray = [
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5]
    ]

    function makeTest(min, max, res) {
        it(`Generated array between ${min} to ${max} : ${res}`, function () {
            assert.deepEqual(generateRandomArray(min, max).sort((a, b) => { return a - b; }), res);
        })
    }

    for (var i = 0; i < minArray.length; i++) {
        makeTest(minArray[i], maxArray[i], resultArray[i]);
    }
})