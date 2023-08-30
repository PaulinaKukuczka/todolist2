const name = document.getElementById('name');

function init() {
	if (window.localStorage.getItem('name') == null) {
		let getName = window.prompt('Podaj swoje imię:');
		let myName = window.localStorage.setItem('name', getName);
	}
	name.innerHTML = window.localStorage.getItem('name');
}
init();
