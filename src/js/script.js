const hamburger = document.querySelector('.main__hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.main__hamburger'),
    counters = document.querySelectorAll('.skills__percent'),
    lines = document.querySelectorAll('.skills__line span'),
    certificates = document.querySelectorAll('.certificates__item'),
    nameActive = document.querySelector('.certificates__name_active');

window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
};

hamburger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    hamburger.classList.toggle('main__hamburger_active');
});

document.querySelectorAll('.menu__ref, .menu__overlay, .menu__link').forEach(function(e) {
    e.addEventListener('click', function() {
        menu.classList.remove('menu_active');
        hamburger.classList.remove('main__hamburger_active');
    });
});

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});

certificates.forEach(function(e) {
    e.addEventListener('mouseover', function() {
        certificates[2].classList.remove('certificates__item_active');
        nameActive.classList.remove('certificates__name_active');
        e.classList.add('certificates__item_active');
    });

    e.addEventListener('mouseout', function() {
        e.classList.remove('certificates__item_active');
        nameActive.classList.add('certificates__name_active');
        certificates[2].classList.add('certificates__item_active');
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 940) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }

});

$("a[href^='#']").click(function() {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
});

$('.contact__form').validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        }
    }
});

$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("#inputname, #inputmail, #inputtext").val("");

        $('form').trigger('reset');
    });
    return false;
});