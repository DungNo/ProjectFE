// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }

// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length}
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   x[slideIndex-1].style.display = "block";  
// }
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
  // $('.slider-main')[0].slick.refresh();
});