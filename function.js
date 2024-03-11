
let navbar = document.querySelector('.header .navbar')

let btn = document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active')
}




var swiper = new Swiper(".mySwiper", {});