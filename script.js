const btnHamburger = document.getElementById('btn-hamburger');
const menu = document.getElementById('menu-content');
const closeBtn = document.getElementById('close');

btnHamburger.onclick = function() {
    menu.classList.add('visible');
};

closeBtn.onclick = function() {
    menu.classList.remove('visible');
}