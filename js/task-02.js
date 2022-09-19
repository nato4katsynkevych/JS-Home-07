// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredientsRef= document.querySelector('#ingredients')



const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]; 


const list =[];

const makeMarkUp =  ingredients.forEach(ingr=> {
	const liEl = document.createElement('li');
	// console.log(liEl)
	liEl.textContent = ingr;
	// console.log(liEl)
	list.push(liEl);
	// console.log(liEl)
	// console.log(list)
	return list
})


ingredientsRef.append(...list);


