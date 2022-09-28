// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const inputRef = document.querySelector('input');
const boxRef = document.querySelector('#boxes');
const renderRef = document.querySelector('[data-action="render"]');
const destroyRef = document.querySelector('[data-action="destroy"]');

renderRef.addEventListener('click', onRenderClick);
destroyRef.addEventListener('click', destroyBoxes);

function onRenderClick(e) {
	boxRef.innerHTML = '';
	const boxes = [];
	const amount = inputRef.value;
	let size = 20;
	for (let index = 1; index <= amount; index++) {

		size += 10;
		boxes.push(`<div class="elem" style = " width : ${size}px; height : ${size}px; background-color: tomato "> </div>
		</div>`);
	}

	boxRef.insertAdjacentHTML('beforeend', boxes.join(""));

	inputRef.value = 0;
}

function destroyBoxes() {
	boxRef.innerHTML = '';
	inputRef.value = 0;
}