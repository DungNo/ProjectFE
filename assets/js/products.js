$(document).ready(function () {
  $('.products-main').slick({
    infinite: false,
    rows: 2,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          rows: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2
        }
      }
    ]
  });
  $('.products-main').slick('refresh');
});