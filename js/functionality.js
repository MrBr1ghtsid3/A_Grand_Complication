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

// Hides footer based on user scrolling up/down the page

let prevScrollPosTop = window.pageYOffset;

window.onscroll = function() {
let currentScrollPosTop = window.pageYOffset;
  if (prevScrollPosTop > currentScrollPosTop) {
    document.getElementById("footer").style.bottom = "-1100px";
  } else {
    document.getElementById("footer").style.bottom = "0px";
  }
  prevScrollPosTop = currentScrollPosTop;
};