var func = require('./index');
var assert = require('assert');

// Условные операторы
// Если а – четное посчитать а*б, иначе а+б
describe("Если а – четное посчитать а*б, иначе а+б", function() {

    var aArray = [-1,0,1,2];
    var b = 2;
    var resArray = [false, false, 3, 4];

    function makeTest(a,b,res){
        it(`Для a = ${a} : ${res}`, function() {
            assert.equal(func.getMultOrSum(a,b),res);
          });
    }

    for(var i = 0; i < aArray.length; i++){
        makeTest(aArray[i],b,resArray[i]);
    }
  });

// Определить какой четверти принадлежит точка с координатами (х,у)
  describe("Определить какой четверти принадлежит точка с координатами (х,у)", function() {
    var xArray = [-1,0,1];
    var yArray = [-1,0,1];
    var resArray = [
        ["3","2,3","2"],
        ["3,4", "0,0", "1,2"],
        ["4", "1,4", "1"]
    ];

    function makeTest(x,y,res){
        it(`(${x} ; ${y}) : ${res}`, function() {
            assert.equal(func.defineQuarter(x,y), res);
          });
    }

    for(var i = 0; i < xArray.length; i++){
        for(var j = 0; j < yArray.length; j++){
            makeTest(xArray[i], yArray[j], resArray[i][j]);
        }
    }
  });

  // Найти суммы только положительных из трех чисел
  describe("Найти суммы только положительных из трех чисел", function(){
    var aArray = [-1, 0, 1];
    var bArray = [-1, 0, -1];
    var cArray = [-1, 0, 2];
    var resArray = [0,0,3];

    function makeTest(a,b,c,res){
        it(`(${a}, ${b}, ${c}) : ${res}`, function(){
            assert.equal(func.sumPositive(a,b,c), res);
        });
    }

    for(var i = 0; i < aArray.length; i++){
        makeTest(aArray[i], bArray[i], cArray[i], resArray[i]);
    }
  })

  //Посчитать выражение max(а*б*с, а+б+с)+3
  describe("Посчитать выражение max(а*б*с, а+б+с)+3", function(){
    var aArray = [-1, 0, 1];
    var bArray = [-1, 0, -1];
    var cArray = [-1, 0, 2];
    var resArray = [2,3,5];

    function makeTest(a,b,c,res){
        it(`(${a}, ${b}, ${c}) : ${res}`, function(){
            assert.equal(func.getCount(a,b,c), res);
        });
    }

    for(var i = 0; i < aArray.length; i++){
        makeTest(aArray[i], bArray[i], cArray[i], resArray[i]);
    }
  })

// Написать программу определения оценки студента по его рейтингу
describe("Написать программу определения оценки студента по его рейтингу", function(){
    var raitingArray = [-1, 0, 55, 100];
    var resArray = ["Введите рейтинг от 0 до 100", "F", "D", "A"];

    function makeTest(raiting, res){
        it(`${raiting} : ${res}`, function(){
            assert.equal(func.getPoint(raiting), res);
        })
    }

    for(var i = 0; i < raitingArray.length; i++){
        makeTest(raitingArray[i], resArray[i]);
    }
})

// Циклы
// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
describe("Найти сумму четных чисел и их количество в диапазоне от 1 до 99", function(){
    var aArray = [1];
    var bArray = [99];
    var resArray = [[2450,49]];

    function makeTest(a,b,res){
        it(`From ${a} to ${b} : ${res.toString()}`, function(){
            assert.deepEqual(func.getSumEven(a,b), res);
        })
    }

    for(var i = 0; i < aArray; i++){
        makeTest(aArray[i], bArray[i], resArray[i]);
    }
})

// Проверить простое ли число?
describe("Проверить простое ли число?", function(){
    var numberArray = [-1,0,1,2,3,5,10];
    var resultArray = [false, false, true, true, true, true, false];

    function makeTest(number, result){
        it(`${number} is Simple : ${result}`, function(){
            assert.equal(func.checkSimpleNumber(number), result);
        })
    }

    for(var i = 0; i < numberArray.length; i++){
        makeTest(numberArray[i], resultArray[i]);
    }
})

// Найти корень натурального числа с точностью до целого
describe("Найти корень натурального числа с точностью до целого", function(){
    var quarterArray = [-1, 0, 1, 2, 3, 24, 100];
    var resultArray = [false, 0, 1, 1, 1, 4, 10];
    var funcArray = [func.searchSqrtStepByStep, func.searchSqrtBinar]
    var methodArray = ["Последовательный перебор", "Бинарный метод"]

    function makeTest(quarter, result, func){
        it(`sqrt from ${quarter} : ${result}`, function(){
            assert.equal(func(quarter), result)
        })
    };

    for(var i = 0; i < funcArray.length; i++){
        describe(methodArray[i], function(){
            for(var j = 0; j < quarterArray.length; j++){
            makeTest(quarterArray[j], resultArray[j], funcArray[i]);
            }
        })
    }
})

// Вычислить факториал числа
describe("Вычислить факториал числа", function(){
    var factorialArray = [-1, 0, 1, 2, 5];
    var resultArray = [false, 1, 1, 2, 120];

    function makeTest(factorial, result){
        it(`Factorial ${factorial} : ${result}`, function(){
            assert.equal(func.getFactorial(factorial), result)
        })
    }

    for(var i = 0; i < factorialArray.length; i++){
        makeTest(factorialArray[i], resultArray[i]);
    }
})

// Посчитать сумму цифр заданного числа
describe("Посчитать сумму цифр заданного числа", function(){
    var numberArray = [-123, 0, 1, 23, 123];
    var resultArray = [false, 0, 1, 5, 6];

    function makeTest(number, result){
        it(`Sum of numbers ${number} : ${result}`, function(){
            assert.equal(func.getSumNumbers(number), result);
        })
    }

    for(var i = 0; i < numberArray.length; i++){
        makeTest(numberArray[i], resultArray[i]);
    }
})

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа
describe("Вывести число, которое является зеркальным отображением последовательности цифр заданного числа", function(){
    var numberArray = [-123, 0, 1, 12, 123, 1234, 12345];
    var resultArray = [false, false, 1, 21, 321, 4321, 54321];

    function makeTest(number, result){
        it(`Mirror number of ${number} is ${result}`, function(){
            assert.equal(func.getMirrorNumber(number), result);
        })
    }

    for(var i = 0; i < numberArray.length; i++){
        makeTest(numberArray[i], resultArray[i]);
    }
})

// Одномерные массивы
// Найти элемент массива
describe("Найти элемент массива", function(){
    var arrArray = [
        [1,3,4,0],
        [-1, 0, 23, -5],
        [1, 2, 3, 4, 0]
    ];
    var resultArray = [
        [0, -5, 0],
        [4, 23, 4],
        [3, 3, 4],
        [2, 2, 3]
    ];
    var funcArray = [func.getMinElement, func.getMaxElement, func.getMinElementIndex, func.getMaxElementIndex];
    var methodArray = ["Get min element", "Get max element", "Get min element index", "Get max element index"];

    function makeTest(array, result, func, method){
        it(`${method} from array ${array.toString()} is ${result}`, function(){
            assert.equal(func(array), result);
        })
    }

    for(var i = 0; i < funcArray.length; i++){
        describe(`${methodArray[i]}`, function(){
            for(var j = 0; j < arrArray.length; j++){
                makeTest(arrArray[j], resultArray[i][j], funcArray[i], methodArray[i]);
            }
        });
    }
})

// Посчитать сумму элементов массива с нечетными индексами
describe("Посчитать сумму элементов массива с нечетными индексами", function(){
    var arrArray = [
        [1,2,3,4,5],
        [0,2,0],
        [0,0,0],
        [-1,-2,-3,4]
    ]
    var resArray = [6,2,0,2];

    function makeTest(arr, res){
        it(`Sum odd elements from array ${arr} is ${res}`, function(){
            assert.equal(func.getSumElementsOddIndex(arr), res);
        })
    }

    for(var i = 0; i < arrArray.length; i++){
        makeTest(arrArray[i], resArray[i]);
    }
})

// Сделать реверс массива (массив в обратном направлении)
describe("Сделать реверс массива (массив в обратном направлении)", function(){
    var arrArray = [
        [1,2,3],
        [1,2,3,4],
        [1,2,3,4,5]
    ]
    var resArray = [
        [3,2,1],
        [4,3,2,1],
        [5,4,3,2,1]
    ]

    function makeTest(arr, res){
        it(`Revers array from array ${arr.toString()} is ${res.toString()}`, function(){
            assert.deepEqual(func.arrayRevesre(arr), res);
        })
    }

    for(var i = 0; i < arrArray.length; i++){
        makeTest(arrArray[i], resArray[i]);
    }
})

// Посчитать количество нечетных элементов массива
describe("Посчитать количество нечетных элементов массива", function(){
    var arrArray = [
        [1,2,3,-1],
        [0,0,0,0],
        [2,2,2,1]
    ]
    var resArray = [3, 0, 1];

    function makeTest(arr, res){
        it(`Count of odd elements in array ${arr} is ${res}`, function(){
            assert.equal(func.getCountOddElements(arr), res);
        })
    }

    for(var i = 0; i < arrArray.length; i++){
        makeTest(arrArray[i], resArray[i]);
    }
})

// Поменять местами первую и вторую половину массива
describe("Поменять местами первую и вторую половину массива", function(){
    var arrArray = [
        [1,2,3,4],
        [1,2,3,4,5,6],
        [1,2]
    ];
    var resArray = [
        [3,4,1,2],
        [4,5,6,1,2,3],
        [2,1]
    ];

    function makeTest(arr, res){
        it(`Half array reversed from ${arr} is ${res}`, function(){
            assert.deepEqual(func.halfArrayRevesre(arr), res);
        })
    }

    for(var i = 0; i < arrArray.length; i++){
        makeTest(arrArray[i], resArray[i]);
    }
})

// Отсортировать массив
describe("Отсортировать массив", function(){
    var arrArray = [
        [0,1,-1,4,3],
        [1,4,2,3,5],
        [0,9,1,2,3]
    ]

    var resArray = [
        [-1,0,1,3,4],
        [1,2,3,4,5],
        [0,1,2,3,9]
    ]
    
    var funcArray = [func.sortBubble, func.sortInsert, func.sortSelect];
    var methodArray = ["Bubble", "Insert", "Select"];

    function makeTest(arr, res, func){
        it(`Sorted arr from ${arr} is ${res}`,function(){
            assert.deepEqual(func(arr), res);
        })
    }

    for(var i = 0; i < funcArray.length; i++){
        describe(methodArray[i], function(){
            for(var j = 0; j < arrArray.length; j++){
                makeTest(arrArray[j], resArray[j], funcArray[i]);
            }
        })
    }
})

// Функции
// Получить строковое название дня недели по номеру дня
describe("Получить строковое название дня недели по номеру дня", function(){
    var dayNumberArray = [0, 1, 6];
    var resArray = [false, "Sunday","Friday"];

    function makeTest(dayNumber, res){
        it(`Day number ${dayNumber} is ${res}`, function(){
            assert.equal(func.getDay(dayNumber), res);
        })
    }

    for(var i = 0; i < dayNumberArray.length; i++){
        makeTest(dayNumberArray[i], resArray[i]);
    }
})

// Найти расстояние между двумя точками в двумерном декартовом пространстве
describe("Найти расстояние между двумя точками в двумерном декартовом пространстве", function(){
    var arrArray = [
        [1,1,0,0],
        [2,2,0,0],
        [3,3,0,0]
    ]
    var resArray = [1.4, 2.8, 4.2];

    function makeTest(x1,y1,x2,y2,res){
        it(`Distance between (${x1}, ${y1}) (${x2}, ${y2}) is ${res}`, function(){
            assert.equal(func.getDistance(x1,y1,x2,y2), res);
        })
    }

    for(var i = 0; i < arrArray.length; i++){
        makeTest(arrArray[i][0], arrArray[i][1], arrArray[i][2], arrArray[i][3], resArray[i]);
    }
})

// Вводим число (0-999), получаем строку с прописью числа
describe("Вводим число (0-999), получаем строку с прописью числа", function(){
    var numberArray = [0, -1, 1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789, 1234567890];
    var resArray = [
        "zero", "minus one", "one", "twelve", "one hundred twenty three", "one thousand two hundred thirty four",
        "twelve thousand three hundred forty five", "one hundred twenty three thousand four hundred fifty six",
        "one million two hundred thirty four thousand five hundred sixty seven",
        "twelve million three hundred forty five thousand six hundred seventy eight",
        "one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine",
        "one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety"
    ]

    function makeTest(number, res){
        it(`${number} in string is ${res}`, function(){
            assert.equal(func.getStringNumber(number), res);
        })
    }

    for(var i = 0; i < numberArray.length; i++){
        makeTest(numberArray[i], resArray[i]);
    }
})

// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число

describe("Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число", function(){
    var stringArray = [
        "zero", "one", "twelve", "one hundred twenty three", "one thousand two hundred thirty four",
        "twelve thousand three hundred forty five", "one hundred twenty three thousand four hundred fifty six",
        "one million two hundred thirty four thousand five hundred sixty seven",
        "twelve million three hundred forty five thousand six hundred seventy eight",
        "one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine",
        "one billion two hundred thirty four million five hundred sixty seven thousand eight hundred ninety"
    ];
    var resArray = [0, 1, 12, 123, 1234, 12345, 123456, 1234567, 12345678, 123456789, 1234567890];

    function makeTest(strNumber, res){
        it(`${strNumber} in string is ${res}`, function(){
            assert.equal(func.getNumberFromString(strNumber), res);
        })
    }

    for(var i = 0; i < stringArray.length; i++){
        makeTest(stringArray[i], resArray[i]);
    }
})