// Задача 3
//Напишите в файле task_2.js функцию filter(), фильтрующую массив объектов по значению свойства. Массив, название свойства и нужное значение должны передаваться в качестве аргументов.

function filter(objects, features, value) {
    let tempObjects = [];
    for (let obj of objects) {
        if (obj[features] === value) tempObjects.push(obj);
    }
    return tempObjects;
}

let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
]

let result = filter(objects, 'name', 'Иван');
console.log(result);
