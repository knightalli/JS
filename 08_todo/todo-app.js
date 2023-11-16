//function newId(array) {
//    let max = 0;    
//    for (id of array) {
//        if (id.id > max) max = id.id;
//    }
//    return max+1;
//    }); 
//}
//Почему-то не работает

(function () {

    function setData(id, data) {
        let jsonData = JSON.stringify(data);
        localStorage.setItem(id, jsonData);
    }

    function getData(id) {
        let data = localStorage.getItem(id);
        data = data ? JSON.parse(data) : [];
        return data;
    }

    //создаём и возвращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    //создаём и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        button.disabled = true;
        
        input.addEventListener('input', function() {
            if (input.value === '') {
                button.disabled = true;
            }
            else button.disabled = false;
        });

        return {
            form,
            input,
            button,
        };
    }

    //создаём и возвращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem (obj, things, listName) {
        let item = document.createElement('li');
        //кпонки помещаем в элемент, который красиво покажет их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        //устанавливаем стили для элемента списка, а также дял размещения кнопок в его правой части с помощью flex
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;        

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        if (obj.done === true) item.classList.toggle('list-group-item-success');

        
        //добавляем обработчики на кнопки
        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success');
            for (let thing of things) {
                if (thing.id.toString() === item.id) {
                    thing.done = !thing.done;
                }
            }
            setData(listName, things);                
        });
        deleteButton.addEventListener('click', function() {
            if (confirm('Вы уверены?')) {
                item.remove();
                let index = things.indexOf(item);
                things.splice(index, 1);
                setData(listName, things);
            }
        });

        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    function createTodoApp(container, title = 'Список дел', listName = 'my') {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();
        let things = getData(listName);

        if (things.length !== 0) {
            for (let thing of things) {
                let thisTodoItem = createTodoItem(thing, things, listName);
                thisTodoItem.item.id = thing.id;
                todoList.append(thisTodoItem.item);  
            }
        }
                

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);
        

        //браузер создает событие submit на форме по нажатию на Enter или на кнопку создания дела
        todoItemForm.form.addEventListener('submit', function(e) {
            //эта строчка необходима, чтобы предотвратить стандартное поведение браузера (в данном случае, перезагрузка при отправке формы)
            e.preventDefault();
            let thisItem = {id: Math.round(Math.random() * 1000000), name: todoItemForm.input.value, done: false};
            things.push(thisItem);
               

            //игноирируем созлание элемента, если пользователь ничего не ввёл в поле
            if (!todoItemForm.input.value) {                
                return;
            }

            let todoItem = createTodoItem(thisItem, things, listName);
            todoItem.item.id = thisItem.id; 

            todoList.append(todoItem.item);

            //обнуляем значение в поле формы
            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;
            setData(listName, things);  
        });
    }    

    window.createTodoApp = createTodoApp;
}) ();



