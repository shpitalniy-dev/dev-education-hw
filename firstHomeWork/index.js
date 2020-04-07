// Условные операторы
function checkNumber() {
    for (var i = 0; i < arguments.length; i++) {
        if (!isFinite(arguments[i])) {
            return false;
        }
    }
    return true;
}

// Если а – четное посчитать а*б, иначе а+б
function getMultOrSum(a, b) {
    if (!checkNumber(a, b) || a <= 0 || b < 0) return false;
    if (a % 2 == 0 && a != 1) {
        return a * b;
    } else {
        return a + b;
    }
}

// console.log("Если а – четное посчитать а*б, иначе а+б");
// console.log("a = 2, b = 3: " + getMultOrSum(2,3));
// console.log("a = 3, b = 2: " + getMultOrSum(2,3));
// console.log("a = str, b = 2: " + getMultOrSum(2,3));

//Определить какой четверти принадлежит точка с координатами (х,у)
function defineQuarter(x, y) {
    if (!checkNumber(x, y)) return false;

    if (x > 0 && y > 0) {
        return "1";
    } else if (x > 0 && y < 0) {
        return "4";
    } else if (x < 0 && y > 0) {
        return "2";
    } else if (x < 0 && y < 0) {
        return "3";
    } else if (x == 0 && y == 0) {
        return "0,0";
    } else if (x == 0 && y > 0) {
        return "1,2";
    } else if (x == 0 && y < 0) {
        return "3,4";
    } else if (x > 0 && y == 0) {
        return "1,4";
    } else if (x < 0 && y == 0) {
        return "2,3";
    }
}

// console.log("Определить какой четверти принадлежит точка с координатами (х,у)");
// console.log("x = 0, y = 0: " + defineQuarter(0,0));
// console.log("x = 1, y = 2: " + defineQuarter(1,2));
// console.log("x = 0, y = 2: " + defineQuarter(0,2));

// Найти суммы только положительных из трех чисел
function sumPositive(a, b, c) {
    if (!checkNumber(a, b, c)) return false;
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > 0) {
            sum += arguments[i];
        }
    }
    return sum;
}

// console.log("Найти суммы только положительных из трех чисел");
// console.log("a=1, b=2, c=-1: " + sumPositive(1,2,-1));

// Посчитать выражение max(а*б*с, а+б+с)+3
function getCount(a, b, c) {
    if (!checkNumber(a, b, c)) return false;

    var sum = a + b + c;
    var mul = a * b * c;

    if (sum > mul) {
        return sum + 3;
    } else {
        return mul + 3;
    }
}

// console.log("Посчитать выражение max(а*б*с, а+б+с)+3");
// console.log("max(1*2*3, 1+2+3)+3: " + getCount(1,2,3));

// Написать программу определения оценки студента по его рейтингу
function getPoint(raiting) {
    if (!checkNumber(raiting)) return false;

    if (raiting >= 0 && raiting <= 19) {
        return "F";
    } else if (raiting >= 20 && raiting <= 39) {
        return "E";
    } else if (raiting >= 40 && raiting <= 59) {
        return "D";
    } else if (raiting >= 60 && raiting <= 74) {
        return "C";
    } else if (raiting >= 75 && raiting <= 89) {
        return "B";
    } else if (raiting >= 90 && raiting <= 100) {
        return "A";
    }
    return "Введите рейтинг от 0 до 100";
}

// console.log("Написать программу определения оценки студента по его рейтингу");
// console.log("Рейтинг 0: " + getPoint(0));
// console.log("Рейтинг 100: " + getPoint(100));

// Циклы
// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function getSumEven(a, b) {
    if (!checkNumber(a, b)) return false;

    var sum = 0;
    var count = 0;

    for (var i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum += i;
            count++;
        }
    }

    return [sum, count];
}

// console.log("Найти сумму четных чисел и их количество в диапазоне от 1 до 99");
// console.log(getSumEven(1,99).toString());

// Проверить простое ли число?
function checkSimpleNumber(a) {
    if (!checkNumber(a) || a < 1) return false;

    /*
    if(a == 1){
        return true;
    }
    */

    for (var i = 2; i < a; i++) {
        if (a % i == 0) {
            return false;
        }
    }

    return true;
}

// console.log("Проверить простое ли число?");
// console.log("Число 2 простое? " + checkSimpleNumber(2));
// console.log("Число 27 простое? " + checkSimpleNumber(27));

// Найти корень натурального числа с точностью до целого
function pow(a, n) {
    if (n == 1) {
        return a;
    }
    return a * pow(a, n - 1);
}

function searchSqrtStepByStep(a) {
    if (!checkNumber(a) || a < 0) return false;
    if (a == 1) return 1;

    var sqrt = 0;

    while (true) {
        if (pow(sqrt + 1, 2) > a) {
            return sqrt;
        }
        sqrt++;
    };
}

// console.log("Найти корень натурального числа с точностью до целого");
// console.log("Корень числа 24 (последовательный перебор): " + searchSqrtStepByStep(24));

function searchSqrtBinar(a) {
    if (!checkNumber(a) || a < 0) return false;
    if (a == 1) return 1;

    var l = 0, r = a, p;

    while (true) {
        p = (l + r) / 2;

        if (Math.abs(a - pow(p, 2)) < 0.00001) {
            return Math.floor(p);
        }

        if (pow(p, 2) > a) {
            r = p;
        } else {
            l = p;
        }
    }
}

// console.log("Найти корень натурального числа с точностью до целого");
// console.log("Корень числа 24 (бинарный поиск): " + searchSqrtBinar(24));

// Вычислить факториал числа
function getFactorial(n) {
    if (!checkNumber(n) || n < 0) return false;

    if (n == 0) {
        return 1;
    }
    return n * getFactorial(n - 1);
}

// console.log("Вычислить факториал числа");
// console.log("Факториал 4: " + getFactorial(4));

// Посчитать сумму цифр заданного числа
function getSumNumbers(number) {
    if (!checkNumber(number) || number < 0) return false;

    var sum = 0;
    while (number != 0) {
        var ostatok = number % 10;
        sum += ostatok;
        number = (number - ostatok) / 10;
    }

    return sum;
}

// console.log("Посчитать сумму цифр заданного числа");
// console.log("Посчитать сумму цифр числа 12345: " + getSumNumbers(12345));

// Вывести число, которое является зеркальным отображением последовательности цифр заданного числа
function getMirrorNumber(number) {
    if (!checkNumber(number) || number < 0) return false;

    var result = 0;
    while (number != 0) {
        var element = number % 10;
        result = result * 10 + element;
        number = (number - element) / 10;
    }

    return result;
}

// console.log("Вывести число, которое является зеркальным отображением последовательности цифр заданного числа");
// console.log("Зеркальное отражение числа 123: " + getMirrorNumber(123));

// Одномерные массивы
// Найти минимальный элемент массива
function getMinElement(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

// console.log("Найти минимальный элемент массива");
// console.log("Минимальный элемент массива [1,2,3,4,5]: " + getMinElement([1,2,3,4,5]));

// Найти максимальный элемент массива
function getMaxElement(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    return max;
}

// console.log("Найти максимальный элемент массива");
// console.log("Максимальный элемент массива [1,2,3,4,5]: " + getMaxElement([1,2,3,4,5]));

// Найти индекс минимального элемента массива
function getMinElementIndex(array) {
    var index = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[index] > array[i]) {
            index = i;
        }
    }
    return index;
}

// console.log("Найти индекс минимального элемента массива");
// console.log("Индекс минимального элемента массива [1,2,3,4,5]: " + getMinElementIndex([1,2,3,4,5]));

// Найти индекс максимального элемента массива
function getMaxElementIndex(array) {
    var index = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[index] < array[i]) {
            index = i;
        }
    }
    return index;
}

// console.log("Найти индекс максимального элемента массива");
// console.log("Индекс максимального элемента массива [1,2,3,4,5]: " + getMaxElementIndex([1,2,3,4,5]));

// Посчитать сумму элементов массива с нечетными индексами
function getSumElementsOddIndex(array) {
    var sum = 0;
    for (var i = 1; i < array.length; i = i + 2) {
        sum += array[i];
    }

    return sum;
}

// console.log("Посчитать сумму элементов массива с нечетными индексами");
// console.log("Сумма элементов массива с нечетными индексами [1,2,3,4,5]: " + getSumElementsOddIndex([1,2,3,4,5]));

// Сделать реверс массива (массив в обратном направлении)
function arrayRevesre(array) {
    var reverse = [];
    for (var i = array.length - 1; i >= 0; i--) {
        reverse.push(array[i]);
    }

    return reverse;
}

// console.log("Сделать реверс массива (массив в обратном направлении)");
// console.log("Реверс массива [1,2,3,4,5]: " + arrayRevesre([1,2,3,4,5]));

// Посчитать количество нечетных элементов массива
function getCountOddElements(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0 || array[i] == 0) {
            continue;
        } else {
            count++;
        }
    }
    return count;
}

// console.log("Посчитать количество нечетных элементов массива");
// console.log("Количество нечетных элементов массива [1,2,3,4,5]: " + getCountOddElements([1,2,3,4,5]));

// Поменять местами первую и вторую половину массива
function halfArrayRevesre(array) {
    if (array.length % 2 != 0) return false;

    var halfRevesre = [];
    var half = array.length / 2;
    for (var i = 0; i < half; i++) {
        halfRevesre[i] = array[i + half];
        halfRevesre[i + half] = array[i];
    }
    return halfRevesre;
}

// console.log("Поменять местами первую и вторую половину массива");
// console.log("Поменять местами первую и вторую половину массива [1,2,3,4,5,6]: " + halfArrayRevesre([1,2,3,4,5,6]));

// Отсортировать массив пузырьком (Bubble)
function sortBubble(array) {
    var len = array.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                /*
                var tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
                */
                [array[j + 1], array[j]] = [array[j], array[j + 1]];
            }
        }
    }
    return array;
}

// console.log("Отсортировать массив пузырьком (Bubble)");
// console.log("Отсортировать массив пузырьком (Bubble) [4, 2, 5, 10, 1]: " + sortBubble([2,4,6,3,7,1]));

// Отсортировать массив выбором (Select)
function sortSelect(array) {
    var len = array.length;

    for (var i = 0; i < len; i++) {
        var min = i;
        for (var j = i + 1; j < len; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        var tmp = array[i];
        array[i] = array[min];
        array[min] = tmp;
    }

    return array;
}

// console.log("Отсортировать массив выбором (Select)");
// console.log("Отсортировать массив выбором (Select) [4, 2, 5, 10, 1]: " + sortSelect([4, 2, 5, 10, 1]));

// Отсортировать массив вставками (Insert)
function sortInsert(array) {
    var len = array.length;

    for (var i = 1; i < len; i++) {
        for (var j = i; j >= 1; j--) {
            if (array[j] < array[j - 1]) {
                var tmp = array[j];
                array[j] = array[j - 1];
                array[j - 1] = tmp;
            } else {
                break;
            }
        }
    }
    return array;
}

// console.log("Отсортировать массив вставками (Insert)");
// console.log("Отсортировать массив вставками (Insert) [4, 2, 5, 10, 1]: " + sortInsert([4, 2, 5, 10, 1]));

// Отсортировать массив (Quick)
function sortQuick(array, left, right) {
    //debugger
    var pivot = Math.ceil((right + left) / 2);
    var i = left;
    var j = right;

    while (i < j) {
        while (array[i] < array[pivot]) {
            i++;
        };
        while (array[j] > array[pivot]) {
            j--;
        }
        if (i < j) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
            j--;
        }
    }

    return pivot;
}

function sortQuickRec(array, left, right) {
    var index;
    if (array.length > 1) {

        index = sortQuick(array, left, right);

        if (left < index - 1) {
            sortQuickRec(array, left, index - 1);
        }
        if (right > index) {
            sortQuickRec(array, index, right);
        }
    }

    return array;
}

// console.log("Отсортировать массив Quick");
// console.log(sortQuickRec([4, 2, 3, 5, 6, 9], 0, 5).toString());

// Функции
// Получить строковое название дня недели по номеру дня
function getDay(dayNumber) {
    if (!checkNumber(dayNumber) || dayNumber > 7 || dayNumber < 1) return false;

    switch (dayNumber) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thuesday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default: 
            return 'Incorrect day number';
    }
}

// console.log("Получить строковое название дня недели по номеру дня");
// console.log("Строковое название дня недели по номеру дня (2): " + getDay(2));
// console.log("Строковое название дня недели по номеру дня (0): " + getDay(0));

// Найти расстояние между двумя точками в двумерном декартовом пространстве
function getDistance(x1, y1, x2, y2) {
    if (!checkNumber(x1, y1, x2, y2)) return false;
    var distance = Math.sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
    return +distance.toFixed(1);
}

// console.log("Найти расстояние между двумя точками");
// console.log("Найти расстояние между двумя точками (2,3) (8,9): " + getDistance(2, 3, 8, 9));

// Вводим число (0-999), получаем строку с прописью числа
var stringNumber = [
    ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
    ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"],
    ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
    ["thousand", "million", "billion"]
]


function getStringTwoElementsNumber(number) {
    if (number > 0 && number < 10) {
        return stringNumber[0][number - 1];
    } else if (number >= 10 && number < 20) {
        return stringNumber[1][number % 10];
    } else if (number >= 20 && number < 100) {
        if (number % 10 == 0) {
            return stringNumber[2][number / 10 - 2];
        } else {
            return stringNumber[2][(number - number % 10) / 10 - 2] + " " + stringNumber[0][number % 10 - 1];
        }
    }
}

function getStringThreeElementsNumber(number) {
    var ostatok = number % 100;
    var str_ostatok = "";
    if (ostatok != 0) {
        str_ostatok = getStringTwoElementsNumber(ostatok);
    }

    var sotni = (number - ostatok) / 100;
    var str_sotni = "";
    if (sotni != 0) {
        str_sotni = getStringTwoElementsNumber(sotni) + " hundred ";
    }

    return str_sotni + str_ostatok;
}


function divideNumberByArray(number) {
    var len = defineLength(number);
    var inner_number = number;
    var arr = [];

    while (inner_number != 0) {
        len = defineLength(inner_number);
        if (len <= 3) {
            arr.unshift(inner_number);
            return arr;
        } else {
            var element = inner_number % 1000;
            inner_number = (inner_number - element) / 1000;
            arr.unshift(element);
        }
    }

    return arr;
}

function defineLength(number) {
    var len = 0;
    while (number != 0) {
        var element = number % 10;
        number = (number - element) / 10;
        len++;
    }
    return len;
}

function getStringNumber(number) {
    if (number == 0) {
        return "zero";
    } else if (number >= pow(10, 12)) {
        return "Border is 999 999 999 999";
    }

    var result = "";
    if (number < 0) {
        result = "minus ";
        number = number * (-1);
    }
    var arr = divideNumberByArray(number);
    var ranking = "";

    for (var i = 0; i < arr.length; i++) {
        if (arr.length - i > 1 && arr[i] != 0) {
            ranking = stringNumber[3][arr.length - i - 2] + " ";
        } else {
            ranking = "";
        }
        result = result + getStringThreeElementsNumber(arr[i]) + " " + ranking;
    }

    return result.trim();
}

// console.log("Вводим число (0-999), получаем строку с прописью числа");
// console.log(getStringNumber(1234567890));

// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.
// создать объект ключ значение one: 1 и проверять есть ли слова биллион, миллион и тд

var numberArray = [
    {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90
    }
]

function getThreeElementsNumberFromString(string) {
    if (string == "") return 0;

    var arrString;
    var result = 0;
    //debugger
    if (string.includes('hundred')) {
        arrString = string.split('hundred');
        result += getThreeElementsNumberFromString(arrString[0].trim()) * 100;
        if (arrString[1] != "") {
            result += getThreeElementsNumberFromString(arrString[1].trim());
        }
    } else {
        arrString = string.split(' ');
        if (arrString.length == 1) {
            result = numberArray[0][string];
        } else {
            for (var i = 0; i < arrString.length; i++) {
                result += getThreeElementsNumberFromString(arrString[i]);
            }
        }
    }
    return result;
}

var arrRanking = ['thousand', 'million', 'billion'];
function getNumberFromString(string) {
    var result = 0;
    var arrString;
    for (var i = arrRanking.length - 1; i >= 0; i--) {
        if (string.includes(arrRanking[i])) {
            arrString = string.split(arrRanking[i]);
            result += getThreeElementsNumberFromString(arrString[0].trim()) * pow(1000, i + 1);
            if (arrString[1] == "") {
                return result;
            }
            string = arrString[1].trim();
        }
    }
    result += getThreeElementsNumberFromString(string);
    return result;
}

// console.log("Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число");
// console.log(getNumberFromString("twelve million three hundred forty five thousand six hundred seventy eight"));



var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 }; // справа на лево идет присваивание
console.log(foo.x);

// Одалживание метода
function findThree() {
    var arg = [].slice.call(arguments);
    return arg.indexOf(3) != -1;
}

module.exports = {
    getMultOrSum,
    defineQuarter,
    sumPositive,
    getCount,
    getPoint,
    getSumEven,
    checkSimpleNumber,
    searchSqrtStepByStep,
    searchSqrtBinar,
    getFactorial,
    getSumNumbers,
    getMirrorNumber,
    getMinElement,
    getMaxElement,
    getMinElementIndex,
    getMaxElementIndex,
    getSumElementsOddIndex,
    arrayRevesre,
    getCountOddElements,
    halfArrayRevesre,
    sortBubble,
    sortSelect,
    sortInsert,
    sortQuick,
    getDay,
    getDistance,
    getStringNumber,
    getNumberFromString,

}