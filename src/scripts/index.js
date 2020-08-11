import '../styles/index.scss';
if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}
console.log('webpack starterkit');

$(document).ready(function ($) {
    $('.slider').slick({
        infinite: false,
        asNavFor: '.text-slider',
        autoplay: false,
        arrows: true,
        centerMode: true,
        centerPadding: '200px',
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 1,
        responsive: [
            {
                breakpoint:  993,
                settings:   {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false,
                    arrows: false,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.text-slider').slick({
        asNavFor: '.slider',
        arrows: false,
        infinite: false,
        initialSlide: 1,
    });
  });