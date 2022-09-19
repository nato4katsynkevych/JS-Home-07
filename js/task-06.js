// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }


const inputRef = document.querySelector('#validation-input')
const lengthRef = inputRef.dataset.length;
let inputLength = inputRef.value.length;

console.log(inputRef);
inputRef.addEventListener('blur', onBlur);

function onBlur(e) {
	chekInput(e);
}
function chekInput(e) {

	let inputLength = inputRef.value.length
	if (inputLength >= lengthRef){
		console.log('yes');
		inputRef.classList.remove('invalid')
		inputRef.classList.add('valid');
	}
	else {
		inputRef.classList.add('invalid')
		console.log('no');
	}
}