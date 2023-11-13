//Задача 1
//Создайте функцию с названием getAge(), которая будет рассчитывать возраст по году рождения. У функции будет всего один аргумент (параметр), который нужно передать в функцию. Функция должна сделать расчёт возраста по текущему году. После расчёта функция должна вернуть результат с помощью команды return.
//Созданную функцию нужно вызвать, передав ей дату рождения. Результат, который вернёт функция, необходимо вывести в консоль.

let nowYear = 2022;
function getAge(yearBirth) {
    return nowYear - yearBirth;
}
console.log(getAge(1998));
console.log(getAge(1991));
console.log(getAge(2007));

//Задача 2
//Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список. В качестве аргументов функция должна принимать два массива: массив строк с исходными email-адресами и массив строк с email-адресами в чёрном списке.

// Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru']

function filter(arr1, arr2) {
    let tempArr = [];
    for (let i of arr1) {
        if (!arr2.includes(i)) tempArr.push(i);        
    }
    return tempArr;
}
// Вызов созданной функции:
let result = filter(whiteList, blackList);
console.log(result);

//Задача 3
//Создайте функцию arrSort(), аргументом (параметром) которой будет массив. Задача функции — сделать сортировку элементов переданного массива по возрастанию. Функция должна вернуть отсортированный массив, а результат выполнения функции должен быть выведен в консоль с помощью console.log.

function arrSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
let arra = [12, 4, -2, 56, 2];
arrSort(arra);
console.log(arra);

