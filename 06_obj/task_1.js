// Задача 1
// Создайте в файле task_1.js функцию с названием getOlderUser(), которая будет определять, кто из двух пользователей старше. Аргументами функции являются два пользователя в виде двух объектов. Функция должна вернуть с помощью команды return имя старшего пользователя.
//Созданную функцию нужно вызвать, передав ей два объекта: user1 и user2. Результат, который вернёт функция, необходимо вывести в консоль.

function getOlderUser(user1, user2) {
    let firstOlder = user1.age > user2.age;
    if (firstOlder) return user1.name;
    else return user2.name;
}

let user1 = {
    name: 'Игорь',
    age: 17
}

let user2 = {
    name: 'Оля',
    age: 21
}

// Вызов созданной функции
let result = getOlderUser(user1, user2);
console.log(result);

// Задача 2
//Для получения большей практики вы можете попробовать определить старшего пользователя из массива пользователей.
//Напишите в файле task_1.js функцию getOlderUserArray(), в которую будете передавать массив объектов с пользователями. Функция должна вернуть имя старшего пользователя.

let allUsers=[
    {name: 'Валя', age: 11},
    { name: 'Таня',age: 24},
    {name: 'Рома',age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
   ]
   
function getOlderUserArray(users) {
     let olderUser = {...users[0]};
    for (user of users) {
        if (user.age > olderUser.age) olderUser = user;
    }
    return olderUser.name;
}

let res = getOlderUserArray(allUsers);
console.log(res);