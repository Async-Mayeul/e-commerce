const btnHamburger = document.getElementById('btn-hamburger');
const btnClose = document.getElementById('close');
const menu = document.querySelector('.menu-content');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const counter = document.getElementById('counter');
const basketSubmit = document.getElementById('submit-basket');
const basketContent = document.getElementsByClassName('basket-content');

btnHamburger.onclick = function() {
    menu.classList.add('visible');
}

btnClose.onclick = function() {
    menu.classList.remove('visible');
}

minus.onclick = function() {
    let counterNumber = Number(counter.innerHTML);
    if (counterNumber !== 0){
        counterNumber--;
    }
    counter.textContent = String(counterNumber);
}

plus.onclick = function() {
    let counterNumber = Number(counter.innerHTML);
    counterNumber++;
    counter.textContent = String(counterNumber);
}

basketSubmit.onclick = function() {
    let counterNumber = Number(counter.innerHTML);
    for (let index = 0; index < basketContent.length; index++) {
        basketContent[index].textContent = String(counterNumber);
    }
}