jQuery(function ($) {
  $('.header__item--menu').on({
    mouseenter: function () {
      //hover
      $(this).children('.header__sublist-wrap').fadeIn();
    },
    mouseleave: function () {
      //leave
      $(this).children('.header__sublist-wrap').fadeOut();
    },
  });
});
