gsap.registerPlugin(ScrollTrigger);

//フェードイン
const fadeInItems = document.querySelectorAll('.animated__fadeIn');
fadeInItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//画像拡大 -> 縮小
const scaleImgItems = document.querySelectorAll('.animated__scaleImg');
scaleImgItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//片側から出現
const clipViewItems = document.querySelectorAll('.animated__clipView');
clipViewItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//下から出現
const underTextItems = document.querySelectorAll('.animated__underText');
underTextItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//タブ切り替え
jQuery(function ($) {
  $('.news__tab').on('click', function () {
    //tabの切り替え
    $('.news__tab').attr('aria-selected', 'false');
    $(this).attr('aria-selected', 'true');

    //tab panelの切り替え
    $('.news__content-wrap').removeClass('js-show');
    $('#' + $(this).attr('aria-controls')).addClass('js-show');

    ScrollTrigger.refresh();
    return false;
  });
});
