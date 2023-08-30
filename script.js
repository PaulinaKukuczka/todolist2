const name = document.getElementById('name');

function init() {
	if (window.localStorage.getItem('name') == null) {
		let getName = window.prompt('Podaj swoje imię:');
		window.localStorage.setItem('name', getName);
	}
	name.innerHTML = window.localStorage.getItem('name');

	//ściąganie z pamięci listy zadań
	let taskList = JSON.parse(window.localStorage.getItem('taskList'));
	//jeśli lista zadań jest pusta, to stwórz tablicę pustą i zapisz ją w pamięci
	if (taskList == null) {
		taskList = Array();
		window.localStorage.setItem('taskList', JSON.stringify(taskList));
	}
	//aktywacja funkcji dodającej zadanie
	showTask();
}
init();

function addTask() {
	let task = document.getElementById('task').value;

	let taskList = JSON.parse(window.localStorage.getItem('taskList'));
	console.log(taskList);
	taskList.push(task);
	window.localStorage.setItem('taskList', JSON.stringify(taskList));
	showTask();
	document.getElementById('task').value = '';
}

// przycisk enter
let input = document.getElementById('task')
input.addEventListener('keypress', e => {
	if(e.key === 'Enter') {
		e.preventDefault();
		document.getElementById("myBtn").click();
	}
})

function showTask() {
	let taskListDiv = document.getElementById('taskList');
	//ściągamy całą listę zadań a nie pojedynczy element
	let taskArray = JSON.parse(window.localStorage.getItem('taskList'));

	let buffer = '';
	buffer += '<ul>';
	for (let i = 0; i < taskArray.length; i++) {
		buffer += '<li>' + taskArray[i] + '<button onclick="removeTask('+i+')">👌</button>'+'</li>';
	}
	buffer += '</ul>';
	taskListDiv.innerHTML = buffer;
}

//usuwanie elementów z listy
function removeTask(i) {
	//wkładamy elementy do tablicy
	let taskArray = JSON.parse(window.localStorage.getItem('taskList'))
	console.log(taskArray)
	taskArray.splice(i, 1);
	window.localStorage.setItem('taskList', JSON.stringify(taskArray));
	showTask();
}

//tłumaczenie JSON parse i JSON stringify

// function explaneJSON() {
// 	let taskArray = Array();
// 	console.log(taskArray);
// 	taskArray.push(window.localStorage.getItem('task'));
// 	taskArray.push(window.localStorage.getItem('task'));
// 	console.log(taskArray);
// 	//dodawanie do listy rzeczy z tablicy
// 	taskList.innerHTML = taskArray;

// 	window.localStorage.taskList = taskArray;
// 	// JSON.stringify(taskArray)
// 	//zapisywanie tablicy jako string
// 	console.log(JSON.stringify(taskArray));

// 	//zapisywanie całej tablicy w localStorage
// 	let localStringTask = window.localStorage.setItem(
// 		'taskList',
// 		JSON.stringify(taskArray)
// 	);
// 	console.log(localStringTask);

// 	// JSON.parse(taskArray)
// 	//zapisywanie stringa z powrotem jako tablicę
// 	let localArrayTask = JSON.parse(window.localStorage.getItem('taskList'));
// 	console.log(localArrayTask);
// }
