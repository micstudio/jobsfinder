(function ($) {
  'use strict';

  // add class to menu when scroll down -
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 60) {
      $('.head-area').addClass('menu-sticky');
    } else if ($(window).scrollTop() < 90) {
      $('.head-area').removeClass('menu-sticky');
    }
  });

  // SMOOTHSCROLL
  $(function () {
    $('.custom-navbar a, #home a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr('href')).offset().top - 49,
          },
          1000
        );
      event.preventDefault();
    });
  });

  // WOW ANIMATION
  new WOW({ mobile: false }).init();
})(jQuery);
