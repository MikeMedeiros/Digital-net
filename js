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

$(document).ready(function() {
    $('.menu').click(function() {
        $('ul').toggleClass('active ');
    })
})
