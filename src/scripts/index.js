import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}
console.log('webpack starterkit');

$(document).ready(function ($) {
    $('.slider').slick({
        infinite: true,
        asNavFor: '.text-slider',
        autoplay: false,
        arrows: true,
        centerMode: false,
        centerPadding: '60px',
        slidesToScroll: 1,
        slidesToShow: 3,
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