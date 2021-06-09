$(document).ready(function () {
  $('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 500,
    cssEase: 'linear',
    prevArrow: $('.prev1'),
    nextArrow: $('.next1')
  });
  $('.slider-main').slick('refresh');
});