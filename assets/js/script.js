// Evento para o menu

let menu = document.querySelector('.icon i');
let sideBar = document.querySelector('.menu-bar');

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    sideBar.classList.toggle('active');
})