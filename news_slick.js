$(document).ready(function () {
    $('.news-main__content').slick({
      dots: false,
      prevArrow: false,
      nextArrow: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      centerPadding: '0px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $(".news-main__content").slick('refresh');
});  