// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).
document.addEventListener("DOMContentLoaded", () => {
    const birthdateInput = document.querySelector(".date-control");
    const studentTable = document.querySelector(".studentTableBody");
    const nowYear = new Date().getFullYear;

    const dateBuilder = (d) => {
        const date = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();

        return `${year}-${month}-${date}`;
    };

    const today = new Date();
    birthdateInput.setAttribute("max", dateBuilder(today));

    // Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

    const studentsList = [
        {
            name: "Артур",
            surname: "Артуров",
            middlename: "Артурович",
            birthDate: (Date("2001-01-01")),
            startYear: 2020,
            faculty: "Информатика",
        },
        {
            name: "Настя",
            surname: "Настеева",
            middlename: "Николаевна",
            birthDate: Date("2003-01-01"),
            startYear: 2021,
            faculty: "Журналистика",
        },
        {
            name: "Егор",
            surname: "Петров",
            middlename: "Александрович",
            birthDate:  Date("1995-01-01"),
            startYear: 2014,
            faculty: "Строительство",
        },
        {
            name: "Елена",
            surname: "Алиас",
            middlename: "Викторовна",
            birthDate:  Date("1985-01-01"),
            startYear: 2003,
            faculty: "Автомобильное строение",
        },
        {
            name: "Петр",
            surname: "Иванов",
            middlename: "Данилович",
            birthDate:  Date("2001-02-03"),
            startYear: 2020,
            faculty: "Журналистика",
        },
    ];

    // Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

    function createFullName(obj) {
        const {name, surname, middlename} = obj;
        return `${surname} ${name} ${middlename}`
    }

    function createStudyYears(obj) {
        const {startYear} = obj
        
        if (nowYear - startYear > 4) return `${startYear}-${startYear+4}(закончил)`
        return `${startYear}-${startYear+4} (${nowYear - startYear} курс)`
    }

    function getStudentItem(studentObj) {
        const row = document.createElement("tr");

        const fullname = document.createElement("td");
        const faculty = document.createElement("td");
        const birthDate = document.createElement("td");
        const years = document.createElement("td");

        fullname.textContent = createFullName(studentObj);
        faculty.textContent = studentObj.faculty;
        birthDate.textContent = `${studentObj.birthDate.year} (${nowYear - studentObj.birthDate.year} лет)`;
        years.textContent = createStudyYears(studentObj);

        row.append(fullname, faculty, birthDate, years);

        console.log(studentObj.birthDate.year())

        return row;
    }

    // Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

    function renderStudentsTable(studentsArray) {
        studentTable.innerHTML = ''
        studentsArray.forEach((student) => {
            studentTable.append(getStudentItem(student))
        })
    }

    renderStudentsTable(studentsList)

    // Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

    // Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

    // Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
});
