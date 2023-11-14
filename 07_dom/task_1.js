function createStudentCard(name, age) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    document.body.append(div);
    document.body.children[0].append(h2);
    document.body.children[0].append(span);
    h2.textContent = name;
    span.textContent = 'Возраст: ' + age;
}

createStudentCard('Игорь', 17);
