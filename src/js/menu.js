
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.header-menu');

function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
}
hamburguer.addEventListener('click', toggleMenu);