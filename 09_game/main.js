document.addEventListener("DOMContentLoaded", function () {
  // Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

  function createNumbersArray(count) {
    const numbersArray = [];

    for (let i = 1; i <= count; i++) {
      numbersArray.push(i, i);
    }

    return numbersArray;
  }

  // Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  // Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

  function startGame(count) {
    const numbersArray = createNumbersArray(count);
    const shuffledNumbersArray = shuffle(numbersArray);
    let openCards = [];

    const container = document.createElement("div");
    container.classList.add('container');
    document.body.appendChild(container);

    function checkMatch() {
      const [firstCard, secondCard] = openCards;

      if (firstCard.textContent === secondCard.textContent) {
        openCards = [];
        firstCard.style.backgroundColor = "#3FD42F";
        secondCard.style.backgroundColor = "#3FD42F";
        firstCard.removeEventListener("click", handleClick);
        firstCard.classList.remove("card");
        secondCard.removeEventListener("click", handleClick);
        secondCard.classList.remove("card");

        if (document.querySelectorAll(".card").length === 0) {
          alert("Поздравляем! Вы нашли все пары!");
        }
      } else {
        firstCard.style.backgroundColor = "#CF0808";
        secondCard.style.backgroundColor = "#CF0808";

        setTimeout(() => {
          firstCard.style.backgroundColor = "#000";
          secondCard.style.backgroundColor = "#000";
          openCards = [];
        }, 1000);
      }
    }

    function handleClick() {
      const card = this;

      if (openCards.length < 2 && !openCards.includes(card)) {
        card.style.backgroundColor = "#fff";
        openCards.push(card);

        if (openCards.length === 2) {
          setTimeout(checkMatch(), 500);
        }
      }
    }

    function createCard(number) {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = number;

      card.addEventListener("click", handleClick);

      return card;
    }

    for (const number of shuffledNumbersArray) {
      const card = createCard(number);
      container.appendChild(card);
    }
  }
  startGame(8);
});
