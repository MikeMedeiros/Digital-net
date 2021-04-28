js
$('.sliders').slick({
    dots: true,
    speed: 300,
    infinity: true,
    adaptiveHeight: false,
    slideToShow: 1,
    autoPlay: true

});
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('a[href="#comeco"]').fadeIn();
        } else {
            $('a[href="#comeco"]').fadeOut();
        }
    });

    $('a[href="#comeco"]').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

const acessoSlide = () => {
    const burguer = document.querySelector('.burguer');
    const header = document.querySelector('.acesso');
    const acesso = document.querySelectorAll('.acesso a');


    burguer.addEventListener('click', () => {
        header.classList.toggle('acesso-active');

    });
    acesso.forEach((link, index) => {
        link.style.animation = 'acessoLinkFade 0.5s ease forwards ${index/7 + 1}s';

    });
    burguer.classList.toggle('toggle');
}
acessoSlide();
