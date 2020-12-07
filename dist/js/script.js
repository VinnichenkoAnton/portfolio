const hamburger = document.querySelector('.main__hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.main__hamburger'),
    counters = document.querySelectorAll('.skills__percent'),
    lines = document.querySelectorAll('.skills__line span');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle("main__hamburger_active");
});

document.querySelectorAll('.menu__item, .menu__overlay, .menu__link').forEach(function(e) {
    e.addEventListener('click', function() {
        menu.classList.remove('menu_active');
        hamburger.classList.remove('main__hamburger_active');
    });
});

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});