const navbar = document.querySelector('.navbar');
const popup = document.querySelector('#popup');


navbar.addEventListener('click', navbarHandler);

function navbarHandler(e){
    e.preventDefault();
    popup.classList.toggle('open');
}