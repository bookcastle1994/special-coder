jQuery(function ($) {
  $('.service-tabs__item').on('click', function () {
    //tabの切り替え
    $('.service-tabs__item').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');

    //tab panelの切り替え
    $('.service-tabs__content-wrap').removeClass('js-show');
    $('#' + $(this).attr('aria-controls')).addClass('js-show');

    return false;
  });
});
