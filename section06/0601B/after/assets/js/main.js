jQuery(function ($) {
  $('.news__tab').on('click', function () {
    //tabの切り替え
    $('.news__tab').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');

    //tab panelの切り替え
    $('.news__content-wrap').removeClass('js-show');
    $('#' + $(this).attr('aria-controls')).addClass('js-show');

    return false;
  });
});
