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




// console.log(boxRef);
// console.log(renderRef);
// console.log(destroyRef);

renderRef.addEventListener('click', onRenderClick);
destroyRef.addEventListener('click', destroyBoxes);

function onRenderClick(e) {
	boxRef.innerHTML = '';
	const boxes = [];
	// console.log(inputRef.value);
	const amount = inputRef.value;
	// const amount = inputRef.value;
	// console.log(amount);
	let size = 20;
	for (let index = 1; index <= amount; index++) {

		size += 10;
		// console.log(size);
		boxes.push(` <div class ="elem" width="${size} px"  hight="${size} px"> qwerty </div>`);
		// console.log(boxes.join(''));
		// console.log(boxes);
	}

	boxRef.insertAdjacentHTML('beforeend', boxes.join(""));
	// boxRef.append(boxes.join(""));
	// boxRef.innerHTML='';
	inputRef.value = 0;
	// boxRef.innerHTML='';

}

// function createBoxes(e) {
// 	return ` <div class ='elem' width=${size}px  hight=${size}px> qwerty
// </div>`
// };

function destroyBoxes() {
	boxRef.innerHTML = '';
	inputRef.value = 0;
}