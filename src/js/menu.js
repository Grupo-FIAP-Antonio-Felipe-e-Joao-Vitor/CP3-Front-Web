
const hamburguer = document.querySelector('.hamburguer');
const headerMenu = document.querySelector('.header-menu');
const pagina = document.body

function toggleMenu(){
    hamburguer.classList.toggle('active');
    headerMenu.classList.toggle('active');
    if (hamburguer.classList.contains('active')) {
        pagina.style.overflowY = 'hidden'
    } else {
        pagina.style.overflowY = 'auto'
    }
}
hamburguer.addEventListener('click', toggleMenu);

