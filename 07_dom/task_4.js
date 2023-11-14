document.addEventListener('DOMContentLoaded', function() {
    let openButton = document.querySelector('.open-list-button');

    function createStudentsList(listArr) {

        let ul = document.createElement('ul');
        document.body.append(ul);
        
        for (let item of listArr) {
            let li = document.createElement('li');    
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let span = document.createElement('span');
        
            li.append(div);
            li.children[0].append(h2);
            li.children[0].append(span);
        
            h2.textContent = item.name;
            span.textContent = 'Возраст: ' + item.age;
        
            ul.prepend(li);
        };        
    };
            
    let allStudents=[
        {name: 'Валя', age: 11},
        {name: 'Таня',age: 24},
        {name: 'Рома',age: 21},
        {name: 'Надя', age: 34},
        {name: 'Антон', age: 7}
    ];
        
    openButton.addEventListener('click', function() {
        createStudentsList(allStudents);
    });
});

