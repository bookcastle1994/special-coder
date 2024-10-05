//マウスストーカーのID
const mouseStalker = document.querySelector('#js-mouse');
//アクションを加える対象の要素
const stalkerArea = document.querySelectorAll('.mouse-stalker-area');

document.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  mouseStalker.style.transform = 'translate(' + x + 'px,' + y + 'px)';
});
stalkerArea.forEach((link) => {
  link.addEventListener('mouseenter', function () {
    mouseStalker.classList.add('js-hover');
  });
  link.addEventListener('mouseleave', function () {
    mouseStalker.classList.remove('js-hover');
  });
});

const cardSwiper = new Swiper('.card__swiper', {
  //swiperの名前
  //切り替えのモーション
  speed: 1000, //表示切り替えのスピード
  effect: 'slide', //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  autoplay: {
    delay: 3000, //何秒ごとにスライドを動かすか
    stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    disableOnInteraction: true, //ユーザーの操作時に止める
    reverseDirection: false, //自動再生を逆向きにする
  },

  //表示について
  centeredSlides: true, //中央寄せにする
  slidesPerView: 'auto',
  spaceBetween: 30,

  //ページネーション
  pagination: {
    el: '.swiper-pagination', //paginationのclass
    clickable: true, //クリックでの切り替えを有効に
    type: 'bullets', //paginationのタイプ (※2)
  },
  //ナビゲーション
  navigation: {
    prevEl: '.swiper-button-prev', //戻るボタンのclass
    nextEl: '.swiper-button-next', //進むボタンのclass
  },
});
