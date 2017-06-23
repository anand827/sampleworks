$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        prevArrow: false,
        nextArrow: false,
        autoplay: true
    });
    $('.slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
        var x = $('.slick-active').attr('data-image');
        $('[data-list]').removeClass('sliderContainer__listLink--active');
        $('[data-list=' + x + ']').addClass('sliderContainer__listLink--active');
    });
});