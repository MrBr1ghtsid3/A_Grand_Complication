// Dynamic date
let year = new Date().getFullYear();

document.getElementById('year').innerHTML = year;

// Burger menu
const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.nav')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})