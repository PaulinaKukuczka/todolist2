const name = document.getElementById('name')

let getName = window.prompt('Podaj swoje imię:')
let myName = window.localStorage.setItem('name', getName)

name.innerHTML = window.localStorage.getItem('name')
