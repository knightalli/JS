// Задача 1
// Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка; x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log. Напомним, что площадь прямоугольника — это произведение ширины и высоты.
console.log('Задача 1');

function square(x1, y1, x2, y2) {
    let width = Math.abs(x1 - x2);
    let height = Math.abs(y1 - y2);
    
    let square = width*height;
    console.log(square);
    console.log();
}
square (2, 3, 10, 5);
square (10, 5, 2, 3);
square (-5, 8, 10, 5);
square (5, 8, 5, 5);
square (8, 1, 5, 1);

// Задача 2
// Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.
console.log();
console.log('Задача 2');
console.log();

function fractions (a, b, n) {
    let c = Math.floor(a % 1 * Math.pow(10, n));
    let d = Math.floor(b % 1 * Math.pow(10, n));
    console.log(c);
    console.log(d);
    console.log('= :', c === d);
    console.log('!= :', c !== d);
    console.log('> :', c > d);
    console.log('< :', c < d);
    console.log('>= :', c >= d);
    console.log('<= :', c <= d);
    console.log();
}

fractions(13.123456789, 2.123, 5);
fractions(13.890123, 2.891564, 2);
fractions(13.890123, 2.891564, 3);

// Задача 3
// Напишите генератор двух случайных чисел в диапазоне между n и m включительно. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
// Выведите два произвольных числа в консоль с помощью console.log.
// Сравните два полученных числа. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.
console.log();
console.log('Задача 3');
console.log();

function randomazer (n, m) {   
    let range = Math.abs(n - m);
    let randomOne = Math.round(Math.random() * range);
    let randomTwo = Math.round(Math.random() * range);

    let one = Math.min(n, m) + randomOne;
    let two = Math.min(n, m) + randomTwo;

    console.log(one);
    console.log(two);
    console.log('= :', one === two);
    console.log('!= :', one !== two);
    console.log('> :', one > two);
    console.log('< :', one < two);
    console.log('>= :', one >= two);
    console.log('<= :', one <= two);
    console.log();
}

randomazer(0, 100);
randomazer(2, 5);
randomazer(100, -5);
randomazer(-3, -10);


