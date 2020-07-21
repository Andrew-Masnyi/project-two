import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}
console.log('webpack starterkit');

$(document).ready(function ($) {
    $('.slider').slick({
        asNavFor: '.text-slider',
        autoplay: true,
        arrows: true,
        centerMode: true,
        slidesToShow: 1,
        // nextArrow: '<div class="slider">',
        // prevArrow: '<div class="slider">'
    });
});

$(document).ready(function(){
    $('.text-slider').slick({
        asNavFor: '.slider',
        arrows: false,
    });
  });