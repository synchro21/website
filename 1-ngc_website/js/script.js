/////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;


/////////////////////////////////////////////////
// Smooth Scroll
const navbar = document.querySelector('#navbar')
let scrolled = false;

window.onscroll = function() {
  if (window.pageYOffset > 100) {
    navbar.classList.remove('top')
    if (!scrolled) {
      navbar.style.transform = 'translateY(-70px)'
    }
    setTimeout(function() {
      navbar.style.transform = 'translateY(0)'
      scrolled = true
    }, 200)
  } else {
    navbar.classList.add('top')
    scrolled = false
  }
}