jQuery(function ($) {
  $('.header__list p').on('click', function () {
    if ($(this).hasClass('js-active')) {
      // メニューが開いている状態 ===================
      //全てのメニューを非表示にして js-activeを消す
      $('.header__mega').hide();
      $('.header__list p').removeClass('js-active');

      //背景スクロールできるようにする
      $('body').css('overflow', 'visible');
      // ========================================
    } else {
      //メニューが閉じている状態 ===================
      //全てのメニューを非表示にして js-activeを消す
      $('.header__mega').hide();
      $('.header__list p').removeClass('js-active');

      //クリックしたものに該当しているメニューを出現してjs-activeをつける
      $($(this).attr('mega-menu')).fadeIn();
      $(this).addClass('js-active');

      //背景スクロールできないようにする
      $('body').css('overflow', 'hidden');
      // ========================================
    }
    return false;
  });

  $(document).on('click', function (event) {
    var target = $(event.target);
    // 該当箇所以外をクリックした場合
    if (target.closest('.header__mega').length == 0) {
      //メガメニュー消したりスクロールができるようにする
      $('.header__mega').hide();
      $('.header__list p').removeClass('js-active');
      $('body').css('overflow', 'visible');
    }
  });
});
