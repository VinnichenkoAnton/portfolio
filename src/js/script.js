const hamburger = document.querySelector('.main__hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.main__hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle("main__hamburger_active");
});